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
        Schema::create('sale_invoices', function (Blueprint $table) {
            $table->id();
            $table->float('net_amount')->nullable();
            $table->float('service_charges', 15, 2)->nullable();
            $table->float('total_discount', 15, 2)->nullable();
            $table->float('total_amount', 15, 2)->nullable();
            $table->float('received_amount', 15, 2)->nullable();
            $table->float('remaining_balance', 15, 2)->nullable();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sale_invoices');
    }
};
