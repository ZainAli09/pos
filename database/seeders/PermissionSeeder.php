<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = Role::create(['name' => 'superadmin']);
        $data = [
            [
                'name' => 'admindashboard.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'user.create',
                'guard_name' => 'web',
            ],
            [
                'name' => 'user.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'user.edit',
                'guard_name' => 'web',
            ],
            [
                'name' => 'user.delete',
                'guard_name' => 'web',
            ],
            [
                'name' => 'role.create',
                'guard_name' => 'web',
            ],
            [
                'name' => 'role.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'role.edit',
                'guard_name' => 'web',
            ],
            [
                'name' => 'role.delete',
                'guard_name' => 'web',
            ],
            [
                'name' => 'events.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'events.create',
                'guard_name' => 'web',
            ],
            [
                'name' => 'events.edit',
                'guard_name' => 'web',
            ],
            [
                'name' => 'events.delete',
                'guard_name' => 'web',
            ],
            [
                'name' => 'directories.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'directories.create',
                'guard_name' => 'web',
            ],
            [
                'name' => 'directories.edit',
                'guard_name' => 'web',
            ],
            [
                'name' => 'directories.delete',
                'guard_name' => 'web',
            ],
            [
                'name' => 'catalog.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'catalog.create',
                'guard_name' => 'web',
            ],
            [
                'name' => 'catalog.edit',
                'guard_name' => 'web',
            ],
            [
                'name' => 'catalog.delete',
                'guard_name' => 'web',
            ],
            [
                'name' => 'chatbox.index',
                'guard_name' => 'web',
            ],
        ];
        $permission = Permission::insert($data);
        // Use a different variable name (e.g., $permissions) for the loop
        foreach ($data as $permissionName) {
            $role->givePermissionTo($permissionName['name']);
        }
    }
}
