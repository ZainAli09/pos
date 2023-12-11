<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $companies = [
            ['name' => 'Company 1'],
            ['name' => 'Company 2'],
            // Add more zone records as needed
        ];

        // Insert the data into the "companies" table
        foreach ($companies as $company) {
            Company::create($company);
        }
    }
}
