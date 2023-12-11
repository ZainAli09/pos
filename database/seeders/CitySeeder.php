<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use App\Models\City;

class CitySeeder extends Seeder
{
    public function run()
    {
        // City::truncate();
        $csvFile = public_path('data\cities.csv'); 

        // Get all files in the public directory
        // $files = File::allFiles($publicPath);
        $file = fopen($csvFile, 'r');

        while (($data = fgetcsv($file)) !== false) {
            City::create([
                'name' => $data[1], // Assuming the CSV has a column 'name'
                // Add other columns as needed
            ]);
        }

        fclose($file);
    }
}

