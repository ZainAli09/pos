<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $productsData = [
            [
                'name' => 'Product 1',
                'batch_no'=>'12345',

                'product_name_two' => 'Product Two 1',
                'desc' => 'Description for Product 1',
                'purchase_rate' => 10.99,
                'sale_rate' => 19.99,
                'whole_sale_rate' => 15.99,
                'discount' => 2.00,
                'discount_percent' => 10.00,
                'rack_no' => 101,
                'expiry_date' => '2023-12-31',
                'expiry_alert_days' => 30,
                'barcode' => '1234567890',
                'status' => 1,
                'company_id' => 1, // Replace with the appropriate company ID
                'category_id' => 1, // Replace with the appropriate category ID
                'subcategory_id' => 1, // Replace with the appropriate subcategory ID
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Product 2',
                'batch_no'=>'12345',
                'product_name_two' => 'Product Two 2',
                'desc' => 'Description for Product 2',
                'purchase_rate' => 12.99,
                'sale_rate' => 22.99,
                'whole_sale_rate' => 18.99,
                'discount' => 1.50,
                'discount_percent' => 7.00,
                'rack_no' => 102,
                'expiry_date' => '2024-02-28',
                'expiry_alert_days' => 45,
                'barcode' => '9876543210',
                'status' => 1,
                'company_id' => 2, // Replace with the appropriate company ID
                'category_id' => 2, // Replace with the appropriate category ID
                'subcategory_id' => 2, // Replace with the appropriate subcategory ID
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more product data as needed
        ];

        // Insert data into the products table
        DB::table('products')->insert($productsData);
    }
}





