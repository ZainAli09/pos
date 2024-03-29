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
        $this->authorize('viewAny', SaleReturnInvoices::class);
        // dd(SaleReturnInvoices::orderBy('id', 'DESC')->get());
        return inertia('SaleReturnInvoices/Index',[
            'salereturninvoices'=> SaleReturnInvoices::orderBy('id', 'DESC')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', SaleReturnInvoices::class);
        $products = Product::where('status', 1)->get()->map(function ($product) {
            return ['id' => $product->id, 'text' => $product->name, 'expiry_date' => $product->expiry_date, 'sale_rate'=> $product->sale_rate, 
            'expiry_alert_days'=>$product->expiry_alert_days, 'remaining_stock'=>$product->remaining_stock];
        })->toArray();
        return inertia('SaleReturnInvoices/Create',
        [
            
            'products'=> $products,
            'sr' => ($saleReturnInvoice = SaleReturnInvoices::orderBy('id', 'DESC')->first()) ? $saleReturnInvoice->id : 0



        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->authorize('create', SaleReturnInvoices::class);
        $this->authorize('sale.return.print', SaleReturnInvoices::class);
        
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

            if($request->submit_button == 'saveandprint'){
                return Inertia::location(route('generateReturnPDF', ['invoiceid'=>$saleReturnInvoice->id]));
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
