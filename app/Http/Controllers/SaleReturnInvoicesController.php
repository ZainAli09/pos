<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\SaleReturnInvoiceDetail;
use App\Models\SaleReturnInvoices;
use App\Models\Transactionable;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SaleReturnInvoicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('SaleReturnInvoices/Index',[
            'salereturninvoices'=> SaleReturnInvoices::paginate()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('SaleReturnInvoices/Create',
        [
            
            'products'=> Product::where('status',1)->get(),

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::beginTransaction();

        try {
            $saleReturnInvoice = SaleReturnInvoices::create([
                'total_amount' => $request->total,
                'total_discount' => $request->total_discount,
                'net_amount' => $request->net_amount,
                'service_charges' => $request->service_charges,
                'received_amount' => $request->received_amount,
                'remaining_balance' => $request->remaining_balance,
                'user_id'=> Auth::user()->id

            ]);
            // dd($saleReturnInvoice);

            if ($saleReturnInvoice) {
                foreach ($request->addedItems as $item) {
                    // dd($item);
                    SaleReturnInvoiceDetail::create([
                        'sale_return_invoice_id' => $saleReturnInvoice->id,
                        'product_id' => $item['product_id'],
                        'quantity' => $item['quantity'],
                        'amount' => $item['total_rate'],
                    ]);
                    $prod=Product::find($item['product_id']);
                    $newstock = ($prod->remaining_stock + $item['quantity']);
                    $prod->update(['remaining_stock'=>$newstock]);
                }
                $transactionable = new Transactionable;
                $saleReturnInvoice->transactionable()->save($transactionable);
                DB::commit(); 
            } else {
                DB::rollBack(); 
            }
        } catch (Exception $e) {
            dd($e);
            DB::rollBack(); 
        }
    
        return Inertia::location(route('salereturninvoices.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(SaleReturnInvoices $saleReturnInvoices)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SaleReturnInvoices $saleReturnInvoices)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SaleReturnInvoices $saleReturnInvoices)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SaleReturnInvoices $saleReturnInvoices)
    {
        //
    }
}