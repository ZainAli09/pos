<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\PurchaseReturnInvoiceDetail;
use App\Models\PurchaseReturnInvoices;
use App\Models\Transactionable;
use App\Models\Vendor;
use Exception;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PurchaseReturnInvoicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('PurchaseReturnInvoices/Index',[
            'purchasereturninvoices' => PurchaseReturnInvoices::paginate(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('PurchaseReturnInvoices/Create',
        [
            'vendors' => Vendor::where('status',1)->get(),
            'products'=> Product::where('status',1)->get(),

        ]);
    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
            DB::beginTransaction();

            try {
                $purchaseReturnInvoice = PurchaseReturnInvoices::create([
                    'total_quantity' => $request->total_quantity,
                    'gross_amount' => $request->gross_amount,
                    'total_discount' => $request->total_discount,
                    'net_amount' => $request->net_amount,
                    'service_charges' => $request->service_charges,
                    'manual_no' => $request->manual_no,
                    'desc' => $request->desc,
                    'vendor_id' => $request->vendor_id,

                ]);
                // dd($purchaseReturnInvoice);

                if ($purchaseReturnInvoice) {
                    foreach ($request->addedItems as $item) {
                        PurchaseReturnInvoiceDetail::create([
                            'pr_invoice_id' => $purchaseReturnInvoice->id,
                            
                            'product_id' => $item['product_id'],
                            'quantity' => $item['quantity'],
                            'purchase_rate' => $item['purchase_rate'],
                            'discount' => $item['discount'],
                            'discount_percent' => $item['discount_percent'],
                            'total_rate' => $item['total_rate'],
                            
                        ]);
                        $prod=Product::find($item['product_id']);
                        $newstock = $prod->total_stock - $item['quantity'];
                        $remainingstock = $prod->remaining_stock - $item['quantity'];

                        $prod->update(['total_stock'=>$newstock, 'remaining_stock'=>$remainingstock]);
                    }
                    $transactionable = new Transactionable;
                    $purchaseReturnInvoice->transactionable()->save($transactionable);
                    DB::commit(); 
                } else {
                    DB::rollBack(); 
                }
            } catch (Exception $e) {
                dd($e);
                DB::rollBack(); 
            }
        
        return Inertia::location(route('purchasereturninvoices.index'));
    }


    /**
     * Display the specified resource.
     */
    public function show(PurchaseReturnInvoices $purchaseReturnInvoices)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PurchaseReturnInvoices $purchaseReturnInvoices)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PurchaseReturnInvoices $purchaseReturnInvoices)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseReturnInvoices $purchaseReturnInvoices)
    {
        //
    }
}
