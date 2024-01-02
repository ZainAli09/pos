<?php

use App\Http\Controllers\CashPaymentVoucherController;
use App\Http\Controllers\CashReceivedVoucherController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DeleteController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\LedgerController;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseInvoiceController;
use App\Http\Controllers\PurchaseReturnInvoicesController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SaleInvoiceController;
use App\Http\Controllers\SaleReturnInvoicesController;
use App\Http\Controllers\SectorController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\WSInvoiceController;
use App\Http\Controllers\WSReturnInvoicesController;
use App\Http\Controllers\ZoneController;
use App\Models\Customer;
use App\Models\Product;
use App\Models\PurchaseInvoice;
use App\Models\PurchaseReturnInvoices;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/storage-link', function(){
    Artisan::call('storage:link');
});



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');

})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/about', fn () => Inertia::render('About'))->name('about');

    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::patch('/update/role', [UserController::class, 'updateRole'])->name('updateRole');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('companies', CompanyController::class);
    Route::resource('categories', CategoryController::class);
    Route::resource('products', ProductController::class);
    Route::post('/updateStatus', [ProductController::class, 'updateStatus'])->name('updateStatus');
    Route::resource('zones', ZoneController::class);
    Route::resource('sectors', SectorController::class);
    Route::resource('employees', EmployeeController::class);
    Route::resource('customers', CustomerController::class);
    Route::resource('expenses', ExpenseController::class);
    
    Route::resource('vendors', VendorController::class);
    Route::resource('subcategories', SubCategoryController::class);
    Route::resource('purchaseinvoices', PurchaseInvoiceController::class);
    Route::resource('saleinvoices', SaleInvoiceController::class);
    Route::resource('wsinvoices', WSInvoiceController::class);
    Route::resource('purchasereturninvoices', PurchaseReturnInvoicesController::class);
    Route::resource('salereturninvoices', SaleReturnInvoicesController::class);
    Route::resource('wsreturninvoices', WSReturnInvoicesController::class);
    Route::resource('roles', RoleController::class);
    Route::resource('permissions', PermissionController::class);
    

    Route::resource('cashpaymentvouchers', CashPaymentVoucherController::class);
    Route::resource('cashreceivedvouchers', CashReceivedVoucherController::class);
    Route::match(['get', 'post'],'/generate-pdf', [PDFController::class, 'generate'])->name('generatePDF');
    Route::match(['get', 'post'],'/generate-pdf/purchase', [PDFController::class, 'generatePurchase'])->name('generatePurchase');
    Route::match(['get', 'post'],'/generate-pdf/ws', [PDFController::class, 'generateWholeSale'])->name('generateWholeSale');

    Route::match(['get', 'post'],'/generate-pdf/return', [PDFController::class, 'generateReturn'])->name('generateReturnPDF');
    Route::match(['get', 'post'],'/generate-pdf/return/purchase', [PDFController::class, 'generateReturnPurchase'])->name('generateReturnPurchase');
    Route::match(['get', 'post'],'/generate-pdf/return/ws', [PDFController::class, 'generateReturnWholeSale'])->name('generateReturnWholeSale');

    Route::delete('/delete/{model}/{id}', [DeleteController::class, 'delete']);
    Route::get('/ledger', [LedgerController::class, 'index'])->name('ledger.index');
    Route::post('/ledger/get', [LedgerController::class, 'searchLedger'])->name('ledger.searchLedger');

    // Reports

    Route::get('reports/retail-product-list', [ReportController::class, 'retailProductList'])->name('reports.retailProductList');
    Route::get('reports/ws-product-list', [ReportController::class, 'wsProductList'])->name('reports.wsProductList');
    Route::get('reports/account-payable', [ReportController::class, 'accountPayable'])->name('reports.accountPayable');
    Route::get('reports/account-receivable', [ReportController::class, 'accountReceivable'])->name('reports.accountReceivable');
    Route::get('reports/recovery', [ReportController::class, 'recovery'])->name('reports.recovery');
    Route::get('reports/recovery/get', [ReportController::class, 'recoveryGet'])->name('reports.recoveryGet');
    Route::get('reports/purchase', [ReportController::class, 'purchase'])->name('reports.purchase');
    Route::get('reports/purchase/get', [ReportController::class, 'purchaseGet'])->name('reports.purchaseGet');
    Route::get('reports/sale', [ReportController::class, 'sale'])->name('reports.sale');
    Route::get('reports/sale/get', [ReportController::class, 'saleGet'])->name('reports.saleGet');

});
Route::get('/resource-directories', function(){
    Artisan::call('delete:resource-folders');
});

require __DIR__.'/auth.php';
