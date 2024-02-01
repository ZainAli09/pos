<?php

namespace Database\Seeders;

use App\Models\User;
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
        $role = Role::first();
        $data = [
            [
                'name' => 'dashboard',
                'guard_name' => 'web',
            ],
            [
                'name' => 'invoices.module',
                'guard_name' => 'web',
            ],
            [
                'name' => 'vouchers.module',
                'guard_name' => 'web',
            ],
            [
                'name' => 'reports.module',
                'guard_name' => 'web',
            ],
            [
                'name' => 'user.management.module',
                'guard_name' => 'web',
            ],
            [
                'name' => 'main.addings.module',
                'guard_name' => 'web',
            ],
            [
                'name' => 'product.edit',
                'guard_name' => 'web',
            ],
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
                'name' => 'ledger',
                'guard_name' => 'web',
            ],
            [
                'name' => 'purchase.return',
                'guard_name' => 'web',
            ],
            [
                'name' => 'purchase',
                'guard_name' => 'web',
            ],
            [
                'name' => 'sale',
                'guard_name' => 'web',
            ],
            [
                'name' => 'sale.return',
                'guard_name' => 'web',
            ],
            [
                'name' => 'whole.sale',
                'guard_name' => 'web',
            ],
            [
                'name' => 'whole.sale.return',
                'guard_name' => 'web',
            ],
            [
                'name' => 'purchase.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'sale.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'whole.sale.return.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'purchase.return.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'sale.return.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'whole.sale.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'invoices',
                'guard_name' => 'web',
            ],
            [
                'name' => 'purchase.print',
                'guard_name' => 'web',
            ],
            [
                'name' => 'sale.print',
                'guard_name' => 'web',
            ],
            [
                'name' => 'whole.sale.print',
                'guard_name' => 'web',
            ],
            [
                'name' => 'purchase.return.print',
                'guard_name' => 'web',
            ],
            [
                'name' => 'sale.return.print',
                'guard_name' => 'web',
            ],
            [
                'name' => 'whole.sale.return.print',
                'guard_name' => 'web',
            ],
            [
                'name' => 'cash.payment.voucher',
                'guard_name' => 'web',
            ],
            [
                'name' => 'cash.payment.voucher.print',
                'guard_name' => 'web',
            ],
            [
                'name' => 'cash.payment.voucher.view',
                'guard_name' => 'web',
            ],

            [
                'name' => 'cash.received.voucher',
                'guard_name' => 'web',
            ],
            [
                'name' => 'cash.received.voucher.print',
                'guard_name' => 'web',
            ],
            [
                'name' => 'cash.received.voucher.view',
                'guard_name' => 'web',
            ],
            [
                'name' => 'delete.records',
                'guard_name' => 'web',
            ],
            [
                'name' => 'profile',
                'guard_name' => 'web',
            ],

           
            
        ];
        $permission = Permission::insert($data);
        // Use a different variable name (e.g., $permissions) for the loop
        foreach ($data as $permissionName) {
            $role->givePermissionTo($permissionName['name']);
        }

        $user = User::first();

        foreach ($data as $permissionName) {
            $user->givePermissionTo($permissionName['name']);
        }
    }
}
