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
        Schema::create('cash_payment_vouchers', function (Blueprint $table) {
            $table->id();
            $table->date('voucher_date');
            $table->string('account_no');
            // $table->unsignedBigInteger('vendor_id');
            // $table->foreign('vendor_id')->references('id')->on('vendors');
            $table->unsignedBigInteger('stakeholder_id');
            // $table->string('stakeholder_type')->nullable();
            $table->string('desc');
            $table->float('total_amount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cash_payment_vouchers');
    }
};
