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

    public function accountReceivable(){
        return Inertia::render('Reports/AccountReceivable/Index');
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
