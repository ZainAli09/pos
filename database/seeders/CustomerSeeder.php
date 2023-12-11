<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Sample data for seeding the customers table
         $customers = [
            [
                'name' => 'John Doe',
                'contact_no' => '1234567890',
                'mobile_no' => '9876543210',
                'zone_id' => 1, // Replace with actual zone ID
                'city_id' => 1, // Replace with actual city ID
                'address' => '123 Main St',
                'status' => 1, // You can change the status as needed
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more customer data as needed
        ];

        // Insert the data into the "customers" table
        DB::table('customers')->insert($customers);
    
    }
}
