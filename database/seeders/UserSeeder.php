<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $superadmin = User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@pos.com',
            'password' => Hash::make('zain12345'),
        ]);
        $superAdminRole = Role::where('name', 'superadmin')->first();
        $superadmin->assignRole($superAdminRole->name);

        User::create([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'password' => Hash::make('1111'),
        ]);
    }
}
