<?php

namespace App\Http\Controllers;

// use App\Models\Permission;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PermissionController extends Controller
{
    // permissionsController.php
    public function index()
    {
        $permissions = Permission::paginate();
        // dd($permissions);
        return Inertia::render('UserManagement/Permissions/Index', ['permissions' => $permissions]);
    }

    public function create()
    {
        return Inertia::render('UserManagement/Permissions/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:permissions,name',
        ]);

        $permission = Permission::create(['name' => $request->name]);
        // return redirect()->route('permissions.index');
        return Inertia::location(route('permissions.index'));
    }

    public function show(Permission $permission)
    {
        return Inertia::render('UserManagement/Permissions/Show', ['permission' => $permission]);
    }

    public function edit(permission $permission)
    {
        return Inertia::render('UserManagement/Permissions/Edit', ['permission' => $permission]);
    }

    public function update(Request $request, permission $permission)
    {
        $request->validate([
            'name' => 'required|unique:permissions,name,' . $permission->id,
        ]);

        $permission->update(['name' => $request->name]);
        return redirect()->route('permissions.index');
    }

    public function destroy(permission $permission)
    {
        $permission->delete();
        return redirect()->route('permissions.index');
    }

    // PermissionsController.php (similar to permissionsController with adjustments for permissions)

}
