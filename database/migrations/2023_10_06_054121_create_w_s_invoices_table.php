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
        Schema::create('w_s_invoices', function (Blueprint $table) {
            $table->id();
            $table->date('sale_date');
            $table->string('desc');
            $table->string('manual_no');
            $table->unsignedBigInteger('customer_id');
            $table->foreign('customer_id')->references('id')->on('customers');

            $table->float('net_amount');
            $table->float('service_charges');
            $table->float('total_discount');
            $table->float('total_amount');
            

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('w_s_invoices');
    }
};
