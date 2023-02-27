<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shuts;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class ShutsController extends Controller
{
    public function index()
    {
        $shuts = Shuts::latest()->get();

        return Inertia::render('Shut/Show', ['shuts' => $shuts]);
    }


    public function create()
    {
        return Inertia::render('Shut/Create');

    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
             
        ]);
        


        Shuts::create([
            'name' => $request->name,
            
        ]);

        return Redirect()->route('shuts.index');

    }


    public function show(Shuts $shut)
    {
        return Inertia::render('Shut/Show', [
            'shut' => $shut
        ]);
    }


    public function edit(Shuts $shut)
    {
        return Inertia::render('Shut/Edit', [
            'shut' => $shut
        ]);
    }


    public function update($id, Request $request)
    {

        Validator::make($request->all(), [
            'name' => ['required'],
             
        ])->validate();

        Shuts::find($id)->update($request->all());

        return redirect()->route('shuts.index');

    }


    public function destroy($id)
    {
        Shuts::find($id)->delete();
        return Redirect()->route('shuts.index');

    }
}
