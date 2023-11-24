<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function updateStatus(Request $request){
        
        $modelName = 'App\Models\\'.$request->model;
        $update = $modelName::find($request->id);
        if($update->status == 0)
            $update->update(['status'=>1]);
        else
            $update->update(['status'=>0]);
        
        return $update;
        

    }
}
