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
        Schema::create('w_s_return_invoice_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('w_s_return_invoice_id');
            $table->foreign('w_s_return_invoice_id')->references('id')->on('w_s_return_invoices');
            
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->integer('quantity');
            $table->float('purchase_rate', 15, 2);
            $table->float('discount', 15, 2)->nullable();
            $table->float('discount_percent', 15, 2)->nullable();
            $table->float('total_rate', 15, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('w_s_return_invoice_details');
    }
};
