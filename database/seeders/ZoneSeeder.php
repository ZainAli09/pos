<?php

namespace Database\Seeders;

use App\Models\Zone;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ZoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $zones = [
            ['name' => 'Zone 1'],
            ['name' => 'Zone 2'],
            // Add more zone records as needed
        ];

        // Insert the data into the "zones" table
        foreach ($zones as $zone) {
            Zone::create($zone);
        }
    }
}
