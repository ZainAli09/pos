<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Employees/Index', ['employees'=> Employee::with('city')->paginate()]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Employees/Create',[ 'cities'=>City::all()]);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $vendor = Employee::create($request->all());
        // return Inertia::location(route('employees.index'));
        return Inertia::render('Employees/Index', ['employees'=> Employee::with('city')->paginate()]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
