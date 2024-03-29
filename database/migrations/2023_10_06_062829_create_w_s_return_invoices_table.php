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
        Schema::create('w_s_return_invoices', function (Blueprint $table) {
            $table->id();
            $table->date('sale_date')->nullable();
            $table->string('desc')->nullable();
            $table->string('manual_no')->nullable();
            $table->unsignedBigInteger('customer_id');
            $table->foreign('customer_id')->references('id')->on('customers');

            $table->float('net_amount', 15, 2)->nullable();
            $table->float('service_charges', 15, 2)->nullable();
            $table->float('total_discount', 15, 2)->nullable();
            $table->float('total_amount', 15, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('w_s_return_invoices');
    }
};
