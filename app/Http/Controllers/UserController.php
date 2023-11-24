<?php

namespace App\Http\Controllers;

// use App\Models\Role;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => User::paginate(),
            'roles' => Role::all()
        ]);
    }

    public function updateRole(Request $request){
        // dd($request);
        try{
            $user = User::find($request->user_id);
            $role = Role::find($request->role_id);
            $user->assignRole($role->name);
            return $user;
        }catch(Exception $e){
            dd($e);
        }
        
    }
}
