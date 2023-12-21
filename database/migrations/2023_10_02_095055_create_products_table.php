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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('product_name_two')->nullable();
            $table->string('desc')->nullable();
            $table->string('batch_no')->nullable();

            $table->float('purchase_rate');
            $table->float('sale_rate');
            $table->float('whole_sale_rate')->nullable();
            $table->float('discount')->nullable();
            $table->float('discount_percent')->nullable();
            $table->integer('rack_no')->nullable();
            $table->date('expiry_date')->nullable();
            $table->integer('expiry_alert_days')->nullable();
            $table->integer('total_stock')->nullable()->default(0);
            $table->integer('remaining_stock')->nullable()->default(0);
            $table->string('barcode')->nullable();
            $table->integer('status')->default(1);

            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')->on('companies');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->unsignedBigInteger('subcategory_id');
            $table->foreign('subcategory_id')->references('id')->on('sub_categories');

            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
