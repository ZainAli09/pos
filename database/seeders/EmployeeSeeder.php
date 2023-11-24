<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Define sample data for employees
        $employees = [
            [
                'name' => 'John Doe',
                'contact_no' => '1234567890',
                'reference_no' => 'REF001',
                'cnic' => '12345-6789012-3',
                'city_id' => 1, // Replace with the appropriate city ID
                'address' => '123 Main St, City',
                'status' => 1,
            ],
            [
                'name' => 'Jane Smith',
                'contact_no' => '9876543210',
                'reference_no' => 'REF002',
                'cnic' => '98765-4321098-7',
                'city_id' => 2, // Replace with the appropriate city ID
                'address' => '456 Elm St, Town',
                'status' => 1,
            ],
            // Add more employee data as needed
        ];

        // Insert the data into the employees table
        DB::table('employees')->insert($employees);
    }
}
