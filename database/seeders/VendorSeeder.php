<?php

namespace Database\Seeders;

use App\Models\Vendor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VendorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vendorsData = [
            [
                'name' => 'Vendor 1',
                'contact_no' => '1234567890',
                'reference_no' => 'REF123',
                'cnic' => '1234567890123',
                'city_id' => 1, // Replace with the appropriate city ID
                'address' => '123 Main St',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Vendor 2',
                'contact_no' => '9876543210',
                'reference_no' => 'REF456',
                'cnic' => '9876543210987',
                'city_id' => 2, // Replace with the appropriate city ID
                'address' => '456 Elm St',
                'status' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more vendor data as needed
        ];

        // Insert data into the vendors table
        DB::table('vendors')->insert($vendorsData);
    
    }
}
