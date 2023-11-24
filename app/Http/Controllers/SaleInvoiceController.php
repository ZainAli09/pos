<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\SaleInvoice;
use App\Models\SaleInvoiceDetail;
use App\Models\Transactionable;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SaleInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('SalesInvoices/Index',[
            'saleinvoices'=> SaleInvoice::paginate()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('SalesInvoices/Create',
        [
            
            'products'=> Product::where('status',1)->get(),

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd(Auth::user()->id);
        DB::beginTransaction();

        try {
            $saleInvoice = SaleInvoice::create([
                'total_amount' => $request->total,
                'total_discount' => $request->total_discount,
                'net_amount' => $request->net_amount,
                'service_charges' => $request->service_charges,
                'received_amount' => $request->received_amount,
                'remaining_balance' => $request->remaining_balance,
                'user_id'=> Auth::user()->id


            ]);
            // dd($saleInvoice);

            if ($saleInvoice) {
                foreach ($request->addedItems as $item) {
                    // dd($item);
                    SaleInvoiceDetail::create([
                        'sale_invoice_id' => $saleInvoice->id,
                        'product_id' => $item['product_id'],
                        'quantity' => $item['quantity'],
                        'amount' => $item['total_rate'],
                    ]);
                    $prod=Product::find($item['product_id']);
                    $newstock = ($prod->remaining_stock - $item['quantity']);
                    $prod->update(['remaining_stock'=>$newstock]);
                }
                $transactionable = new Transactionable;
                $saleInvoice->transactionable()->save($transactionable);
                DB::commit(); 
            } else {
                DB::rollBack(); 
            }
        } catch (Exception $e) {
            dd($e);
            DB::rollBack(); 
        }
    
        return Inertia::location(route('saleinvoices.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(SaleInvoice $saleInvoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SaleInvoice $saleInvoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SaleInvoice $saleInvoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SaleInvoice $saleInvoice)
    {
        //
    }
}