<?php

namespace Database\Seeders;

use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subcategories = [
            ['name' => 'SubCategory 1'],
            ['name' => 'SubCategory 2'],
            // Add more zone records as needed
        ];

        // Insert the data into the "subcategories" table
        foreach ($subcategories as $subcategory) {
            SubCategory::create($subcategory);
        }
    }
}
