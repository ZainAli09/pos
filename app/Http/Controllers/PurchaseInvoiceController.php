<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\PurchaseInvoice;
use App\Models\PurchaseInvoiceDetail;
use App\Models\Transactionable;
use App\Models\Vendor;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PurchaseInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('viewAny', PurchaseInvoice::class);
        return inertia('PurchaseInvoices/Index',[
            'purchaseinvoices' => PurchaseInvoice::paginate(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', PurchaseInvoice::class);

        $products = Product::where('status', 1)->get()->map(function ($product) {
            return ['id' => $product->id, 'text' => $product->name, 'batch_no' => $product->batch_no, 'purchase_rate'=> $product->purchase_rate];
        })->toArray();
       
            // dd($products);
      
        return inertia('PurchaseInvoices/Create',
        [
            'vendors' => Vendor::where('status',1)->get(),
            'sr' => ($purchaseInvoice = PurchaseInvoice::orderBy('id', 'DESC')->first()) ? $purchaseInvoice->id : 0,
            // 'products'=> Product::where('status', 1)->get(),
            'products' => $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->authorize('create', PurchaseInvoice::class);
        $this->authorize('purchase.print', PurchaseInvoice::class);

        
            DB::beginTransaction();

            try {
                $purchaseInvoice = PurchaseInvoice::create([
                    'total_quantity' => $request->total_quantity,
                    'gross_amount' => $request->gross_amount,
                    'total_discount' => $request->total_discount,
                    'net_amount' => $request->net_amount,
                    'service_charges' => $request->service_charges,
                    'manual_no' => $request->manual_no,
                    'desc' => $request->desc,
                    'vendor_id' => $request->vendor_id,


                ]);
                // dd($purchaseInvoice);

                if ($purchaseInvoice) {
                    foreach ($request->addedItems as $item) {
                        PurchaseInvoiceDetail::create([
                            'purchase_invoice_id' => $purchaseInvoice->id,
                            'product_id' => $item['product_id'],
                            'quantity' => $item['quantity'],
                            'purchase_rate' => $item['purchase_rate'],
                            'discount' => $item['discount'],
                            'discount_percent' => $item['discount_percent'],
                            'total_rate' => $item['total_rate'],
                            
                        ]);

                        $prod=Product::find($item['product_id']);
                        $newstock = $prod->total_stock + $item['quantity'];
                        $remainingstock = $prod->remaining_stock + $item['quantity'];
                        $prod->update(['total_stock'=>$newstock, 'remaining_stock'=>$remainingstock]);
                    }

                    $transactionable = new Transactionable;
                    $purchaseInvoice->transactionable()->save($transactionable);

                    DB::commit(); 
                } else {
                    DB::rollBack(); 
                }
            } catch (Exception $e) {
                //dd($e);
                DB::rollBack(); 
            }
        
        return Inertia::location(route('purchaseinvoices.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(PurchaseInvoice $purchaseInvoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PurchaseInvoice $purchaseInvoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PurchaseInvoice $purchaseInvoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseInvoice $purchaseInvoice)
    {
        //
    }
}
