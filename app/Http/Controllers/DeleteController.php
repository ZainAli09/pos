<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DeleteController extends Controller
{
    public function delete(Request $request, $model, $id){
        // dd($model);

        $modelName = 'App\Models\\'.$model;
        $delete = $modelName::find($id);
        $delete->delete();
        return Inertia::location(url()->previous());
    }
}
