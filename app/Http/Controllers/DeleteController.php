<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Policies\DeletePolicy;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DeleteController extends Controller
{
    public function delete(Request $request, $model, $id){
        
        $this->authorize('deleteRecords', DeletePolicy::class);

        $modelName = 'App\Models\\'.$model;
        $delete = $modelName::find($id);
        $delete->delete();
        return Inertia::location(url()->previous());
       
    }
}
