<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Category 1'],
            ['name' => 'Category 2'],
            // Add more zone records as needed
        ];

        // Insert the data into the "categories" table
        foreach ($categories as $category) {
            Category::create($category);
        }
    
    }
}
