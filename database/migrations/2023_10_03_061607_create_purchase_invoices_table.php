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
        Schema::create('purchase_invoices', function (Blueprint $table) {
            $table->id();
           
            $table->string('desc')->nullable();
            $table->integer('manual_no')->nullable();
            $table->unsignedBigInteger('vendor_id');
            $table->foreign('vendor_id')->references('id')->on('vendors');
            $table->integer('total_quantity');
            $table->float('gross_amount',15 , 2)->nullable();
            $table->float('total_discount',15 , 2)->nullable();
            $table->float('net_amount',15 , 2)->nullable();
            $table->float('service_charges',15 , 2)->nullable();
            $table->date('voucher_date')->default(now());

           
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_invoices');
    }
};
