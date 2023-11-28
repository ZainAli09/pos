<?php

namespace App\Http\Controllers;

use App\Models\CashPaymentVoucher;
use App\Models\CashReceivedVoucher;
use App\Models\Customer;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\Transactionable;
use App\Models\Vendor;
use App\Models\WSInvoice;
use App\Models\WSReturnInvoices;
use Illuminate\Http\Request;

class LedgerController extends Controller
{
    public function index(){
        $this->authorize('ledger');
        return inertia('Ledger/Index',[
            'vendors' => Vendor::where('status', 1)->get(),
            'employees' => Employee::where('status', 1)->get(),
            'expenses' => Expense::where('status', 1)->get(),
            'customers' => Customer::where('status', 1)->get(),
        ]);
        // return inertia('PDF/Ledger');

    }

    public function searchLedger(Request $request){
        // dd($request);
        $type = explode('-', $request->account_no);
        if($type[1] == 'v'){
            
            $ledger = Transactionable::where('transactionable_type', 'App\Models\CashPaymentVoucher')->with(['transactionable' => function ($query) use ($request, $type) {
                $query->whereDate('voucher_date', '>=', $request->start_date)
                    ->whereDate('voucher_date', '<=', $request->end_date);
                $query->orderBy('voucher_date', 'ASC');
                $query->with(['stakeholder' => function ($q) use ($request, $type) {
                    $q->where('stakeholder_id', $type[0]);
                }]);
            }])->get();
            
            $ledger_other_part = Transactionable::where('transactionable_type', 'App\Models\PurchaseInvoice')
                    ->orWhere('transactionable_type', 'App\Models\PurchaseReturnInvoices')
          
            ->with(['transactionable' => function ($query) use ($type, $request) {
                $query->whereDate('created_at', '>=', $request->start_date)
                    ->whereDate('created_at', '<=', $request->end_date);
                $query->where('vendor_id', $type[0]);
                // dd($type[0]);
            }])->get();
            
            $ledger = $ledger->filter(function ($item) {
                return $item->transactionable !== null && $item->transactionable->stakeholder !== null;
            });

            // $ledger_other_part = $ledger_other_part->filter(function ($item) {
            //     return $item->transactionable !== null ;
            // });
            $mergedLedgers = $ledger->concat($ledger_other_part);
            
            $sortedLedgers = $mergedLedgers->sortBy('transactionable.voucher_date');
            // dd($ledger_other_part);

            return inertia('PDF/Ledger',[
                'ledgers'=> $sortedLedgers,
                'ledger_for' => 'Vendor',
                'name'=>$type[2],
                'start_date'=>$request->start_date,
                'end_date'=>$request->end_date
            ]);

        }elseif($type[1] == 'c'){

            $ledger = Transactionable::where(function ($query) {
                $query->where('transactionable_type', 'App\Models\WSInvoice')
                    ->orWhere('transactionable_type', 'App\Models\WSReturnInvoices')
                    ->orWhere('transactionable_type', 'App\Models\CashReceivedVoucher');
            })
            ->with(['transactionable' => function ($query) use ($type, $request) {
                $query->where('customer_id', $type[0]);
                // $query->whereBetween('sale_date', [$request->start_date, $request->end_date]);
                $query->whereDate('sale_date', '>=', $request->start_date)
                    ->whereDate('sale_date', '<=', $request->end_date);
                $query->orderBy('sale_date', 'ASC');
            }])->get();
            // dd($ledger);
            $ledger = $ledger->filter(function ($item) {
                return $item->transactionable !== null;
            });
            $ledger = $ledger->sortBy(function ($item) {
                return $item->transactionable->voucher_date ?? $item->transactionable->sale_date;
            })->values();
            
            
            return inertia('PDF/Ledger',[
               'ledgers'=> $ledger,
               'ledger_for' => 'Cust',

                'name'=>$type[2],
                'start_date'=>$request->start_date,
                'end_date'=>$request->end_date
            ]);

        } elseif($type[1] == 'e' || $type[1] == 'emp'){

            $ledger = Transactionable::where(function ($query) {
                $query->where('transactionable_type', 'App\Models\CashPaymentVoucher');
            })->has('transactionable')->with(['transactionable' => function($query) use ($request, $type) {
                $query->whereDate('voucher_date', '>=', $request->start_date)
                      ->whereDate('voucher_date', '<=', $request->end_date);
                $query->orderBy('voucher_date', 'ASC');
                $query->with(['stakeholder' => function($q) use ($request, $type) {
                    $q->where('stakeholder_id', $type[0]);
                }]);
            }])->get();
            
            $ledger = $ledger->filter(function ($item) {
                return $item->transactionable !== null && $item->transactionable->stakeholder !== null;
            });

             $ledger = $ledger->sortBy(function ($item) {
                    return $item->transactionable->voucher_date;
                })->values();
            // dd($ledger);
            return inertia('PDF/Ledger',[
                'ledgers'=> $ledger,
                'ledger_for' => 'ExpAndEmp',
                'name'=>$type[2],
                'start_date'=>$request->start_date,
                'end_date'=>$request->end_date
            ]);
        }
        
    }
}
