<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('purchase_return_invoice_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pr_invoice_id');
            $table->foreign('pr_invoice_id')->references('id')->on('purchase_return_invoices');
    
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->integer('quantity');
            $table->float('purchase_rate');
            $table->float('discount');
            $table->float('discount_percent');
            $table->float('total_rate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_return_invoice_details');
    }
};
