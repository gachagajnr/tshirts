<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tshirt;
use App\Http\Requests\StoreTshirtRequest;
use Illuminate\Support\Facades\Validator;
use App\Exceptions;
 
class ShirtController extends Controller
{
    
   
    public function index()
    {
         $tshirts = Tshirt::latest()->get();

        return Inertia::render('Shirt/Show', ['tshirts' => $tshirts]);
    }

    
    public function create()
    {
        return Inertia::render('Shirt/Create');

    }

   
      public function store(Request $request)
    {
         $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'required',
        'img' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        'price'=>'required',
        'color'=>'required',
        'size'=>'required',
        'quantity'=>'required'
    ]);
    $image_path = '';
    if ($request->hasFile('img')) {
        $image_path = time().'.'.$request->img->extension();  
        $request->img->move(public_path('imgs'), $image_path);
    
    }

    // try {
         Tshirt::create([
        'name' => $request->name,
        'description' => $request->description,
        'img' => $image_path,
        'price'=>$request->price,
        'color'=>$request->color,
        'size'=>$request->size,
        'quantity'=>$request->quantity
    ]);
        // } catch(Exception  $e) {
        //     return redirect()->back()->withErrors([
        //         'create' => 'ups, there was an error'
        //     ]);
        // }        ;
    
    
        

        return Redirect()->route('tshirts.index');
    
    }

     
    public function show(Tshirt $tshirt)
    {
       return Inertia::render('Shirt/Show', [
            'tshirt' => $tshirt
        ]);
    }

     
    public function edit(Tshirt $tshirt)
    {
        return Inertia::render('Shirt/Edit', [
            'tshirt' => $tshirt
        ]);
    }

    
    public function update($id,Request $request)
    {

        Validator::make($request->all(), [
        'name' => ['required'],
        'size' => ['required'],
        'color' => ['required'],
        'description' => ['required'],
         
        ])->validate();
    
        Tshirt::find($id)->update($request->all());
        
        return redirect()->route('tshirts.index');
     
    }

    
    public function destroy($id)
    {
        Tshirt::find($id)->delete();
        return Redirect()->route('tshirts.index');
    
    }
}
