<?php

namespace Database\Seeders;

use App\Models\Expense;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExpenseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $expenses = [
            ['name' => 'Expense 1', 'reference_no'=>'asas', 'status'=>1],
            ['name' => 'Expense 2', 'reference_no'=>'asas', 'status'=>1],
            // Add more zone records as needed
        ];

        // Insert the data into the "expenses" table
        foreach ($expenses as $expense) {
            Expense::create($expense);
        }
    }
}
