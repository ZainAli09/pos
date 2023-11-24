<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Expense;
use Illuminate\Database\Seeder;
use Database\Seeders\CitySeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        
        $this->call([
            CitySeeder::class,
            ZoneSeeder::class, 
            CategorySeeder::class, 
            SubCategorySeeder::class, 
            CompanySeeder::class,
            ProductSeeder::class,
            VendorSeeder::class,
            CustomerSeeder::class,
            ExpenseSeeder::class,
            EmployeeSeeder::class


        ]);

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
