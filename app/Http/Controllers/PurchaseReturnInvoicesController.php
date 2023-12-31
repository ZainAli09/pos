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
        $this->authorize('viewAny', PurchaseReturnInvoices::class);
        return inertia('PurchaseReturnInvoices/Index',[
            'purchasereturninvoices' => PurchaseReturnInvoices::orderBy('id', 'DESC')->with('vendor')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', PurchaseReturnInvoices::class);
        $products = Product::where('status', 1)->get()->map(function ($product) {
            return ['id' => $product->id, 'text' => $product->name, 'batch_no' => $product->batch_no, 'purchase_rate'=> $product->purchase_rate];
        })->toArray();
        $vendors = Vendor::where('status', 1)->get()->map(function ($vendor) {
            return ['id' => $vendor->id, 'text' => $vendor->name, 'address' => $vendor->address];
        })->toArray();
        return inertia('PurchaseReturnInvoices/Create',
        [
            'vendors' => $vendors,
            'products'=> $products,
            // 'sr'=> PurchaseReturnInvoices::orderBy('id', 'DESC')->first(),
            'sr' => ($purchaseReturnInvoice = PurchaseReturnInvoices::orderBy('id', 'DESC')->first()) ? $purchaseReturnInvoice->id : 0



        ]);
    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $this->authorize('create', PurchaseReturnInvoices::class);
        $this->authorize('purchase.return.print', PurchaseReturnInvoices::class);

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
                    'created_at'=> $request->created_at


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
