<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Transactionable;
use App\Models\WSInvoice;
use App\Models\WSInvoiceDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class WSInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('viewAny', WSInvoice::class);
        // dd(WSInvoice::with('transactionable')->get());
        return inertia('WSInvoices/Index',[
            'wsinvoices'=> WSInvoice::with('customer')->paginate()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', WSInvoice::class);
        // dd(Customer::where('status', 1)->get());
     
        return inertia('WSInvoices/Create',[
            'products'=> Product::where('status', 1)->get(),
            'customers'=> Customer::where('status', 1)->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->authorize('create', WSInvoice::class);
        $this->authorize('whole.sale.print', WSInvoice::class);

        // dd($request);
        DB::beginTransaction();

        try {
            $wsInvoice = WSInvoice::create([
                'total_amount' => $request->total_amount,
                'total_discount' => $request->total_discount,
                'net_amount' => $request->net_amount,
                'service_charges' => $request->service_charges,
                'customer_id' => $request->customer_id,
                'desc' => $request->desc,
                'manual_no' => $request->manual_no,
                'sale_date'=>$request->sale_date
                
            ]);
            // dd($wsInvoice);

            if ($wsInvoice) {
                foreach ($request->addedItems as $item) {
                    // dd($item);
                    WSInvoiceDetail::create([
                        'w_s_invoice_id' => $wsInvoice->id,
                        'product_id' => $item['product_id'],
                        
                        'quantity' => $item['quantity'],
                        'purchase_date' => $item['purchase_date'],
                      
                        'discount' => $item['discount'],
                        'discount_percent' => $item['discount_percent'],
                        'total_rate' => $item['total_rate'],
                    ]);
                    $prod=Product::find($item['product_id']);
                    $newstock = ($prod->remaining_stock - $item['quantity']);

                    $prod->update(['remaining_stock'=>$newstock]);
                }
                $transactionable = new Transactionable;
                $wsInvoice->transactionable()->save($transactionable);

                DB::commit(); 
            } else {
                DB::rollBack(); 
            }
        } catch (Exception $e) {
            dd($e);
            DB::rollBack(); 
        }
    
        return Inertia::location(route('wsinvoices.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(WSInvoice $wSInvoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(WSInvoice $wSInvoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, WSInvoice $wSInvoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(WSInvoice $wSInvoice)
    {
        //
    }
}
