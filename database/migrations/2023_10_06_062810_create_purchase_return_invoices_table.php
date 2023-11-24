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
        Schema::create('purchase_return_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('desc');
            $table->integer('manual_no');
            $table->unsignedBigInteger('vendor_id');
            $table->foreign('vendor_id')->references('id')->on('vendors');
            
            $table->integer('total_quantity');
            $table->float('gross_amount');
            $table->float('total_discount');
            $table->float('net_amount');
            $table->float('service_charges');
            $table->date('voucher_date')->default(now());
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_return_invoices');
    }
};
