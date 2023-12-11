<?php

namespace App\Http\Controllers;

use App\Models\PurchaseInvoice;
use App\Models\PurchaseInvoiceDetail;
use App\Models\PurchaseReturnInvoiceDetail;
use App\Models\PurchaseReturnInvoices;
use App\Models\SaleInvoice;
use App\Models\SaleInvoiceDetail;
use App\Models\SaleReturnInvoiceDetail;
use App\Models\SaleReturnInvoices;
use App\Models\WSInvoice;
use App\Models\WSInvoiceDetail;
use App\Models\WSReturnInvoiceDetail;
use App\Models\WSReturnInvoices;
use Dompdf\Adapter\PDFLib;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use PDF;

class PDFController extends Controller
{
    public function generate(Request $request){
        // dd($request->invoiceid);
        $saleInvoice = SaleInvoice::find($request->invoiceid);
        $saleInvoiceDetails = SaleInvoiceDetail::where('sale_invoice_id',$saleInvoice->id)->with('product')->get();
        

    //    dd($saleInvoiceDetails);
        return inertia('PDF/SaleInvoice', ['saleInvoice'=> $saleInvoice,
            'saleInvoiceDetails' => $saleInvoiceDetails,
            'authUser' => Auth::user()->name,

            ]);
        // return Inertia::render('PDF/PurchaseInvoice', ['data'=>$data]);
        
    }

    public function generateReturn(Request $request){
        // dd($request->invoiceid);
        $saleInvoice = SaleReturnInvoices::find($request->invoiceid);
        $saleInvoiceDetails = SaleReturnInvoiceDetail::where('sale_return_invoice_id',$saleInvoice->id)->with('product')->get();
        

    //    dd($saleInvoiceDetails);
        return inertia('PDF/SaleReturnInvoice', ['saleInvoice'=> $saleInvoice,
            'saleInvoiceDetails' => $saleInvoiceDetails,
            'authUser' => Auth::user()->name,

            ]);
        // return Inertia::render('PDF/PurchaseInvoice', ['data'=>$data]);
        
    }

    public function generatePurchase(Request $request){
        $purchaseInvoice = PurchaseInvoice::with('vendor')->find($request->invoiceid);
        $purchaseInvoiceDetails = PurchaseInvoiceDetail::where('purchase_invoice_id',$purchaseInvoice->id)->with('product')->get();
        

        return inertia('PDF/PurchaseInvoice', ['purchaseInvoice'=> $purchaseInvoice,
            'purchaseInvoiceDetails' => $purchaseInvoiceDetails,
            'authUser' => Auth::user()->name,

            ]);
    }

    public function generateReturnPurchase(Request $request){
        $purchaseInvoice = PurchaseReturnInvoices::with('vendor')->find($request->invoiceid);
        $purchaseInvoiceDetails = PurchaseReturnInvoiceDetail::where('pr_invoice_id',$purchaseInvoice->id)->with('product')->get();
        

        return inertia('PDF/PurchaseReturnInvoice', ['purchaseInvoice'=> $purchaseInvoice,
            'purchaseInvoiceDetails' => $purchaseInvoiceDetails,
            'authUser' => Auth::user()->name,

            ]);
    }

    public function generateWholeSale(Request $request){
        $wsInvoice = WSInvoice::with('customer')->find($request->invoiceid);
        $wsInvoiceDetails = WSInvoiceDetail::where('w_s_invoice_id',$wsInvoice->id)->with('product')->get();
        

        return inertia('PDF/WSInvoice', ['wsInvoice'=> $wsInvoice,
            'wsInvoiceDetails' => $wsInvoiceDetails,
            'authUser' => Auth::user()->name,

            ]);
    }
    public function generateReturnWholeSale(Request $request){
        $wsInvoice = WSReturnInvoices::with('customer')->find($request->invoiceid);
        $wsInvoiceDetails = WSReturnInvoiceDetail::where('w_s_return_invoice_id',$wsInvoice->id)->with('product')->get();
        

        return inertia('PDF/WSReturnInvoice', ['wsInvoice'=> $wsInvoice,
            'wsInvoiceDetails' => $wsInvoiceDetails,
            'authUser' => Auth::user()->name,

            ]);
    }
}
