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
        Schema::create('w_s_invoice_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('w_s_invoice_id');
            $table->foreign('w_s_invoice_id')->references('id')->on('w_s_invoices');

            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->integer('quantity');
            $table->date('purchase_date')->nullable();
            $table->float('discount')->nullable();
            $table->float('discount_percent')->nullable();
            $table->float('total_rate')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('w_s_invoice_details');
    }
};
