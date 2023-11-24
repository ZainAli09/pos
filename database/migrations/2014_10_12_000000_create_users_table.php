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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('company_name')->nullable();
            $table->string('reg_no')->nullable();
            $table->string('contact_person')->nullable();
            $table->string('business_nature')->nullable();
            $table->string('address')->nullable();
            $table->integer('country_id')->nullable();
            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('city_id')->references('id')->on('cities');
            $table->string('mobile_no')->nullable();
            $table->string('phone_no')->nullable();
            $table->string('other_phone')->nullable();
            $table->string('website')->nullable();
            $table->string('logo')->nullable();
            $table->string('company_logo')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
