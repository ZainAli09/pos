<?php

namespace App\Http\Controllers;

// use App\Models\Role;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{    

    public function index()
    {
        $this->authorize(User::class,'viewAny');
        return Inertia::render('Users/Index', [
            'users' => User::with( 'roles.permissions')->paginate(),
            'roles' => Role::get()
        ]);
    }

    public function updateRole(Request $request){
        // dd($request);

        $this->authorize('update', auth()->user());
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
