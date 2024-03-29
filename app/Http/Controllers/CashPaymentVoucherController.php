<?php

namespace App\Http\Controllers;

use App\Models\CashPaymentVoucher;
use App\Models\Customer;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\Transactionable;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CashPaymentVoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', CashPaymentVoucher::class);
          
        // $expenses = Expense::all();
        // $employees = Employee::all();
        // $vendors = Vendor::all();
        $expenses = Expense::all()->map(function ($expense) {
            return ['id' => $expense->id, 'text' => $expense->name, 'type'=> 'Expense'];
        })->toArray();
        
        $employees = Employee::all()->map(function ($employee) {
            return ['id' => $employee->id, 'text' => $employee->name, 'type'=> 'Employee'];
        })->toArray();
        
        $vendors = Vendor::all()->map(function ($vendor) {
            return ['id' => $vendor->id, 'text' => $vendor->name, 'type'=> 'Vendor'];
        })->toArray();
        // $stakeholders = [
        //         ['type' => 'Vendor', 'data' => $vendors],
        //         ['type' => 'Employee', 'data' => $employees],
        //         ['type' => 'Expense', 'data' => $expenses],
        //     ];
        $stakeholders = array_merge($employees, $expenses, $vendors);
                // dd($stakeholders);
        return inertia('Vouchers/CashPayment/Create',[
            'stakeholders' =>$stakeholders,
            'paymentVouchers'=>CashPaymentVoucher::with('stakeholder.stakeholder')->orderBy('voucher_date', 'DESC')->get()
        ]);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);

       if ($request->stakeholder_type === 'Expense') {
            $expense = Expense::find($request->stakeholder_id);
            $stakeholder = $expense->stakeholder()->create();

            
        } elseif ($request->stakeholder_type === 'Employee') {
            $employee = Employee::find($request->stakeholder_id);
            $stakeholder = $employee->stakeholder()->create();
           

            
        }elseif ($request->stakeholder_type === 'Vendor') {
            $vendor = Vendor::find($request->stakeholder_id);
            $stakeholder = $vendor->stakeholder()->create();
            // dd($stakeholder);
            
        }
        $voucher = CashPaymentVoucher::create([
            "voucher_date" => $request->voucher_date,
            "account_no" => $request->account_no,
            "desc" => $request->desc,
            "total_amount" => $request->total_amount,
            'stakeholder_id'=> $stakeholder->id
        ]);

        $transactionable = new Transactionable;
        $voucher->transactionable()->save($transactionable);

        return Inertia::location(route('cashpaymentvouchers.create'));
    }

    /**
     * Display the specified resource.
     */
    public function show(CashPaymentVoucher $cashPaymentVoucher)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CashPaymentVoucher $cashPaymentVoucher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CashPaymentVoucher $cashPaymentVoucher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CashPaymentVoucher $cashPaymentVoucher)
    {
        //
    }
}
