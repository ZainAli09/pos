<?php

namespace App\Http\Controllers;

use App\Models\CashReceivedVoucher;
use App\Models\Category;
use App\Models\Company;
use App\Models\Customer;
use App\Models\Product;
use App\Models\PurchaseInvoice;
use App\Models\SaleInvoice;
use App\Models\Transactionable;
use App\Models\User;
use App\Models\Vendor;
use App\Models\WSInvoice;
use App\Models\Zone;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function retailProductList(){
        return Inertia::render('PDF/Retail-Product-List',[
            'products'=> Product::where('status', 1)->get(),
        ]);
    }

    public function wsProductList(){
        return Inertia::render('PDF/WS-Product-List',[
            'products'=> Product::where('status', 1)->get(),
        ]);
    }

    public function accountPayable(){
        return Inertia::render('Reports/AccountPayable/Index');
    }

    public function calculateVendorBalance($ledgers, $currentIndex)
        {
            $balance = 0;
            $totalDebit = 0;
            $totalCredit = 0;

            for ($i = 0; $i <= $currentIndex; $i++) {
                $ledger = $ledgers[$i] ?? null;

                // Check if ledger is defined and has the necessary properties
                if ($ledger) {
                    $transactionableType = class_basename($ledger->transactionable_type);
                    $debit = 0;
                    $credit = 0;

                    if ($transactionableType === 'CashPaymentVoucher') {
                        $debit = $ledger->transactionable->total_amount ?? 0;
                    } elseif ($transactionableType === 'PurchaseReturnInvoices') {
                        $debit = $ledger->transactionable->net_amount ?? 0;
                    } elseif ($transactionableType === 'PurchaseInvoice') {
                        $credit = $ledger->transactionable->net_amount ?? 0;
                    }

                    $totalDebit += $debit;
                    $totalCredit += $credit;
                    $balance += ($credit - $debit);
                }
            }

            $result = [
                'totalDebit' => $totalDebit,
                'totalCredit' => $totalCredit,
                'balance' => $balance,
            ];

            if ($balance === 0) {
                $result['formattedBalance'] = '0';
            } elseif ($balance < 0) {
                $result['formattedBalance'] = abs($balance) . ' DR';
            } else {
                $result['formattedBalance'] = $balance . ' CR';
            }

            return $result;
        }


    public function accountPayableGet(Request $request){
        try{
            $vendorBalances = [];

            $ledger = Transactionable::where('transactionable_type', 'App\Models\CashPaymentVoucher')
                ->with(['transactionable' => function ($query) use ($request) {
                    $query->whereDate('voucher_date', '>=', $request->start_date)
                        ->whereDate('voucher_date', '<=', $request->end_date);
                    $query->orderBy('voucher_date', 'ASC');
                    $query->with(['stakeholder.stakeholder' => function ($q) use ($request) {
                        
                    }]);
                }])->get();
                // dd($ledger);
            $ledger_other_part = Transactionable::where('transactionable_type', 'App\Models\PurchaseInvoice')
                ->orWhere('transactionable_type', 'App\Models\PurchaseReturnInvoices')
                ->with(['transactionable.vendor' => function ($query) use ($request) {
                    $query->whereDate('created_at', '>=', $request->start_date)
                        ->whereDate('created_at', '<=', $request->end_date);
                    
                }])->get();
                // dd($ledger_other_part);
            $ledger = $ledger->filter(function ($item) {
                return $item->transactionable !== null && $item->transactionable->stakeholder !== null;
            });

            $mergedLedgers = $ledger->concat($ledger_other_part);

            $sortedLedgers = $mergedLedgers->sortBy('transactionable.voucher_date');


            $groupedLedgers = $mergedLedgers->groupBy(function ($item) {
                if ($item->transactionable_type === 'App\Models\CashPaymentVoucher') {
                    return $item->transactionable->stakeholder->stakeholder->id;
                } elseif ($item->transactionable_type === 'App\Models\PurchaseInvoice' || $item->transactionable_type === 'App\Models\PurchaseReturnInvoices') {
                    return $item->transactionable->vendor->id;
                }
            });
    
            foreach ($groupedLedgers as $vendorId => $vendorLedgers) {
                $result = $this->calculateVendorBalance($vendorLedgers, count($vendorLedgers) - 1);
    
                $latestVoucher = $vendorLedgers->where('transactionable_type', 'App\Models\CashPaymentVoucher')
                        ->sortByDesc('transactionable.voucher_date')
                        ->first();
                        // dd($latestVoucher);

                if(!is_null($latestVoucher)){
                // Extract amount and other relevant information
                $latestVoucherAmount = optional($latestVoucher->transactionable)->total_amount;

                $result['latestVoucherAmount'] = $latestVoucherAmount;
                
                }
                $vendorName = $vendorLedgers->first()->transactionable_type === 'App\Models\CashPaymentVoucher'
                ? $vendorLedgers->first()->transactionable->stakeholder->stakeholder->name
                : $vendorLedgers->first()->transactionable->vendor->name;
                $result['name'] = $vendorName;


                $vendorBalances[$vendorId] = $result;

               
            }

        // dd($vendorBalances);

            return Inertia::render('PDF/AccountPayable',[
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'vendorBalances' => $vendorBalances,
            ]);

        }catch(Exception $e){
            dd($e);
        }
        
    }

    public function accountReceivable(){
        return Inertia::render('Reports/AccountReceivable/Index');
    }

    public function calculateBalance(array $ledgers, int $currentIndex)
    {
        // dd($ledgers);
        $balance = 0;
        $totalDebit = 0;
        $totalCredit = 0;

        for ($i = 0; $i <= $currentIndex; $i++) {
            $ledger = $ledgers[$i];

            // Check if ledger is defined and has the necessary properties
            if ($ledger) {
                $transactionableType = class_basename($ledger['transactionable_type']);
                $debit = 0;
                $credit = 0;
                // dd($transactionableType);
                if ($transactionableType === 'CashReceivedVoucher') {
                    $debit = $ledger['transactionable']['total_amount'] ?? 0;
                } elseif ($transactionableType === 'WSReturnInvoices') {
                    $debit = $ledger['transactionable']['total_amount'] ?? 0;
                } elseif ($transactionableType === 'WSInvoice') {
                    $credit = $ledger['transactionable']['total_amount'] ?? 0;
                }

                $totalDebit += $debit;
                $totalCredit += $credit;
                $balance += ($credit - $debit);
            }
        }

        $result = [
            'totalDebit' => $totalDebit,
            'totalCredit' => $totalCredit,
            'balance' => $balance,
        ];
        if ($balance === 0) {
            $result['formattedBalance'] = '0';
        } elseif ($balance < 0) {
            $result['formattedBalance'] = abs($balance) . ' DR';
        } else {
            $result['formattedBalance'] = $balance . ' CR';
        }
        // dd($result);

        return $result;
    }

    public function accountReceiveableGet(Request $request){
        // dd($request);
        try{

            $ledger = Transactionable::where(function ($query) {
                $query->where('transactionable_type', 'App\Models\WSInvoice')
                    ->orWhere('transactionable_type', 'App\Models\WSReturnInvoices')
                    ->orWhere('transactionable_type', 'App\Models\CashReceivedVoucher');
            })
            ->with([
                'transactionable' => function ($query) use ($request) {
                    $query->whereDate('sale_date', '>=', $request->start_date)
                        ->whereDate('sale_date', '<=', $request->end_date);
                    $query->orderBy('sale_date', 'ASC');
                    $query->with('customer'); // Assuming there is a 'customer' relationship in Transactionable
                }
            ])->get();

        $ledger = $ledger->filter(function ($item) {
            return $item->transactionable !== null;
        });

        $ledger = $ledger->sortBy(function ($item) {
            return $item->transactionable->sale_date ?? $item->transactionable->voucher_date;
        })->values();

        $groupedLedgers = $ledger->groupBy(function ($item) {
            return $item->transactionable->customer->id;
        });

        $balances = [];

        foreach ($groupedLedgers as $customerId => $customerLedgers) {
            // Get the latest CashReceivedVoucher for the customer
            $latestVoucher = $customerLedgers
                ->where('transactionable_type', 'App\Models\CashReceivedVoucher')
                ->sortByDesc('transactionable.sale_date')
                ->first();

            if(!is_null($latestVoucher)){
                $latestVoucherAmount = optional($latestVoucher->transactionable)->total_amount;
                $result['latestVoucherAmount'] = $latestVoucherAmount;
                
            }
            // Extract amount and other relevant information
            $customerName = $customerLedgers->first()->transactionable->customer->name;

            $result = $this->calculateBalance($customerLedgers->toArray(), count($customerLedgers) - 1);

            // Include the latest voucher amount and customer name in the result
            $result['name'] = $customerName;

            // Store the result with customer ID as the key
            $balances[$customerId] = $result;
        }

        // dd($balances);
        return Inertia::render('PDF/AccountReceiveable',[
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'balances' => $balances,
        ]);
            
        

        }catch(Exception $e){
            dd($e);
        }
    }

    public function recovery(){
        return Inertia::render('Reports/Recovery/Index',[
            'zones'=> Zone::all(),
        ]);
    }

    public function recoveryGet(Request $request){
        try{
            
            $zone = Zone::find($request->zone_id);
            
            if(!$zone){
                $zone = 'N/A';
            }else{
                $zone = $zone->name;
            }
            
            $ledger = Transactionable::where(function ($query) {
                $query->where('transactionable_type', 'App\Models\WSInvoice')
                    ->orWhere('transactionable_type', 'App\Models\WSReturnInvoices')
                    ->orWhere('transactionable_type', 'App\Models\CashReceivedVoucher');
                    
            })
            
            ->with(['transactionable.customer' => function ($query) use ($request) {
                $query->where('zone_id', $request->zone_id);
                $query->whereDate('created_at', '>=', $request->start_date)
                    ->whereDate('created_at', '<=', $request->end_date);
                // $query->orderBy('sale_date', 'ASC');
            }])->get();
            // dd($ledger);
            $ledger = $ledger->filter(function ($item) {
                return $item->transactionable->customer !== null;
            });
            
            $descledger = $ledger->sortByDesc(function ($item) {
                return $item->transactionable->sale_date;
            })->values();

            $groupedLedger = $descledger->groupBy(function ($item) {
                return $item->transactionable->customer->id; // Assuming customer ID is unique
            });

            

            // $firstRecordsByCustomer = $groupedLedger->map(function ($group) {
                
            //     return $group->first();
            // });
            $firstRecordsByCustomer = $groupedLedger->map(function ($group) {
                return $group->where('transactionable_type', 'App\Models\CashReceivedVoucher')->max(function ($transaction) {
                    // return $transaction->first();
                    return $transaction;
                });
            });
          

           
            $creditTotal = 0;
            $debitTotal = 0;
            $customerBalances = [];

            foreach ($groupedLedger as $customerId => $transactions) {
                $creditTotal = 0;
                $debitTotal = 0;

                foreach ($transactions as $transaction) {
                    if ($transaction->transactionable_type === 'App\Models\WSInvoice') {
                        // Credit amount from WSInvoice
                        $creditTotal += $transaction->transactionable->total_amount;
                    } elseif ($transaction->transactionable_type === 'App\Models\CashReceivedVoucher' || $transaction->transactionable_type === 'App\Models\WSReturnInvoices') {
                        // Debit amount from CashReceivedVoucher or WSReturnInvoices
                        $debitTotal += $transaction->transactionable->total_amount;
                    }
                }

                $balance = $creditTotal - $debitTotal;
                
                // Store the customer ID and balance in the result array
                $customerBalances[$customerId] = $balance;
            }

        }catch(Exception $e){
            dd($e);
        }
        return Inertia::render('PDF/Recovery', [
            'receivedVouchers'=>$firstRecordsByCustomer,
            'customerBalances'=>$customerBalances,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'zone'=> $zone
            
        ]);
    }

    public function profit(){
        
        return Inertia::render('Reports/Profit/Index',[
            'products'=> Product::where('status', 1)->get(),
            'companies'=> Company::all(),
            'vendors'=> Vendor::where('status', 1)->get(),
            'categories'=> Category::all(),

        ]);
    }

    public function profitGet(Request $request){
        try{
            $products = PurchaseInvoice::where(function($query) use ($request){
                    if(!is_null($request->vendor_id)){
                        $query->where('vendor_id', $request->vendor_id);
                    }
                    if(!is_null($request->start_date) && !is_null($request->end_date)){
                        $query->whereDate('created_at', '>=', $request->start_date)
                            ->whereDate('created_at', '<=', $request->end_date);
                    }
                })->with(['details.product'=> function($subquery) use ($request){
                    
                        if(!is_null($request->product_id)){
                            $subquery->where('id', $request->product_id);
                        }
                        if(!is_null($request->company_id)){
                            $subquery->where('company_id', $request->company_id);
                        }
                        if(!is_null($request->category_id)){
                            $subquery->where('category_id', $request->category_id);
                        }
                    
                }])->get();
                $products = $products->filter(function ($item) {
                    return $item->details->first(function ($detail) {
                        return $detail->product !== null;
                    }) !== null;
                });
            // dd($products);
        }catch(Exception $e){
            dd($e);
        }
      
        // dd($products);
       
        return Inertia::render('PDF/Profit', [
            'products'=>$products,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date
        ]);
    }

    public function stock(){
        
        return Inertia::render('Reports/Stock/Index',[
            'products'=> Product::where('status', 1)->get(),
            'companies'=> Company::all(),
            'vendors'=> Vendor::where('status', 1)->get(),
            'categories'=> Category::all(),

        ]);
    }

    public function stockGet(Request $request){
        try{
            $products = PurchaseInvoice::where(function($query) use ($request){
                    if(!is_null($request->vendor_id)){
                        $query->where('vendor_id', $request->vendor_id);
                    }
                    if(!is_null($request->start_date) && !is_null($request->end_date)){
                        $query->whereDate('created_at', '>=', $request->start_date)
                            ->whereDate('created_at', '<=', $request->end_date);
                    }
                })->with(['details.product'=> function($subquery) use ($request){
                    
                        if(!is_null($request->product_id)){
                            $subquery->where('id', $request->product_id);
                        }
                        if(!is_null($request->company_id)){
                            $subquery->where('company_id', $request->company_id);
                        }
                        if(!is_null($request->category_id)){
                            $subquery->where('category_id', $request->category_id);
                        }
                    
                }])->get();
                $products = $products->filter(function ($item) {
                    return $item->details->first(function ($detail) {
                        return $detail->product !== null;
                    }) !== null;
                });
            // dd($products);
        }catch(Exception $e){
            dd($e);
        }
      
        // dd($products);
       
        return Inertia::render('PDF/Stock', [
            'products'=>$products,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date
        ]);
    }


    public function purchase(){
        
        return Inertia::render('Reports/Purchase/Index',[
            'products'=> Product::where('status', 1)->get(),
            'companies'=> Company::all(),
            'vendors'=> Vendor::where('status', 1)->get(),
            'categories'=> Category::all(),

        ]);
    }
    public function purchaseGet(Request $request){
        try{
            $products = PurchaseInvoice::where(function($query) use ($request){
                    if(!is_null($request->vendor_id)){
                        $query->where('vendor_id', $request->vendor_id);
                    }
                    if(!is_null($request->start_date) && !is_null($request->end_date)){
                        $query->whereDate('created_at', '>=', $request->start_date)
                            ->whereDate('created_at', '<=', $request->end_date);
                    }
                })->with(['details.product'=> function($subquery) use ($request){
                    
                        if(!is_null($request->product_id)){
                            $subquery->where('id', $request->product_id);
                        }
                        if(!is_null($request->company_id)){
                            $subquery->where('company_id', $request->company_id);
                        }
                        if(!is_null($request->category_id)){
                            $subquery->where('category_id', $request->category_id);
                        }
                    
                }])->get();
                $products = $products->filter(function ($item) {
                    return $item->details->first(function ($detail) {
                        return $detail->product !== null;
                    }) !== null;
                });
            // dd($products);
        }catch(Exception $e){
            dd($e);
        }
      
        // dd($products);
       
        return Inertia::render('PDF/Purchase', [
            'products'=>$products,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date
        ]);
    }

    public function wSale(){
        return Inertia::render('Reports/WholeSale/Index',[
            'users' => User::all(),
            'companies'=> Company::all(),
            'vendors' => Vendor::where('status', 1)->get(),
            'products'=> Product::where('status', 1)->get(),
            'categories'=> Category::all()
        ]);
    }

    public function wSaleGet(Request $request){
        // dd($request);
        $sales = WSInvoice::where(function($query) use ($request){
            if(!is_null($request->start_date) && !is_null($request->end_date)){
                $query->whereDate('created_at', '>=', $request->start_date)
                    ->whereDate('created_at', '<=', $request->end_date);
            }
            if(!is_null($request->user_id)){
                $query->where('user_id', $request->user_id);
            }
        })
        
        ->with(['wSaleInvoiceDetail.product' => function($query) use ($request){
            if(!is_null($request->product_id)){
                $query->where('id', $request->product_id);
            }
            if(!is_null($request->company_id)){
                $query->where('company_id', $request->company_id);
            }
            if(!is_null($request->category_id)){
                $query->where('category_id', $request->category_id);
            }
        }])->get();
    //    dd($sales);
        $sales = $sales->filter(function ($item) {
            return $item->wSaleInvoiceDetail->first(function ($detail) {
                return $detail->product !== null;
            }) !== null;
        });
        // dd($sales);
        return Inertia::render('PDF/WholeSale',[
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'sales'=> $sales
        ]);
    }

    public function sale(){
        return Inertia::render('Reports/Sale/Index',[
            'users' => User::all(),
            'companies'=> Company::all(),
            'vendors' => Vendor::where('status', 1)->get(),
            'products'=> Product::where('status', 1)->get(),
            'categories'=> Category::all()
        ]);
    }

    public function saleGet(Request $request){
        // dd($request);
        $sales = SaleInvoice::where(function($query) use ($request){
            if(!is_null($request->start_date) && !is_null($request->end_date)){
                $query->whereDate('created_at', '>=', $request->start_date)
                    ->whereDate('created_at', '<=', $request->end_date);
            }
            if(!is_null($request->user_id)){
                $query->where('user_id', $request->user_id);
            }
        })
        
        ->with(['saleInvoiceDetail.product' => function($query) use ($request){
            if(!is_null($request->product_id)){
                $query->where('id', $request->product_id);
            }
            if(!is_null($request->company_id)){
                $query->where('company_id', $request->company_id);
            }
            if(!is_null($request->category_id)){
                $query->where('category_id', $request->category_id);
            }
        }])->get();
       
        $sales = $sales->filter(function ($item) {
            return $item->saleInvoiceDetail->first(function ($detail) {
                return $detail->product !== null;
            }) !== null;
        });
        // dd($sales);
        return Inertia::render('PDF/Sale',[
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'sales'=> $sales
        ]);
    }
}
