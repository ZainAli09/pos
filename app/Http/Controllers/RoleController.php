<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Exception;
// use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;


class RoleController extends Controller
{
    // RolesController.php
    public function index()
    {
        $roles = Role::all();
        return Inertia::render('UserManagement/Roles/Index', ['roles' => $roles]);
    }

    public function create()
    {
        $permissions = Permission::all();
        return Inertia::render('UserManagement/Roles/Create', ['permissions'=> $permissions]);
    }

    public function store(Request $request)
    {
        try{
            // dd($request->input('permissions'));
            $request->validate([
                'name' => 'required|unique:roles,name',
            ]);
    
            $role = Role::create(['name' => $request->name]);
    
            // Assign selected permissions to the role
            
            $role->syncPermissions($request->input('permissions'));
            //  $role->givePermissionTo($request->input('permissions'));

            return Inertia::render('UserManagement/Roles/Index', ['roles' => Role::all()]);

        
        }catch(Exception $e){
            dd($e);
        }
        
    }

    public function show(Role $role)
    {
        return Inertia::render('UserManagement/Roles/Show', ['role' => $role]);
    }

    public function edit(Role $role)
    {
        return Inertia::render('UserManagement/Roles/Edit', ['role' => $role]);
    }

    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => 'required|unique:roles,name,' . $role->id,
        ]);

        $role->update(['name' => $request->name]);
        return redirect()->route('roles.index');
    }

    public function destroy(Role $role)
    {
        $role->delete();
        return redirect()->route('roles.index');
    }

    

}
