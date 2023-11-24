<?php

namespace App\Http\Controllers;

use App\Models\CashReceivedVoucher;
use App\Models\Customer;
use App\Models\Transactionable;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CashReceivedVoucherController extends Controller
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
        return inertia('Vouchers/CashReceived/Create',[
            'customers'=>Customer::where('status', 1)->get(),
            'receivedVouchers'=>CashReceivedVoucher::with('customer')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         // dd($request);
         $receivedVoucher = CashReceivedVoucher::create($request->all());
         $transactionable = new Transactionable;
         $receivedVoucher->transactionable()->save($transactionable);
         return Inertia::location(route('cashreceivedvouchers.create'));
    }

    /**
     * Display the specified resource.
     */
    public function show(CashReceivedVoucher $cashReceivedVoucher)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CashReceivedVoucher $cashReceivedVoucher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CashReceivedVoucher $cashReceivedVoucher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CashReceivedVoucher $cashReceivedVoucher)
    {
        //
    }
}
