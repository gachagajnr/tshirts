<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tshirt;
use App\Http\Requests\StoreTshirtRequest;
use Illuminate\Support\Facades\Validator;

class ShirtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $tshirts = Tshirt::latest()->get();

        return Inertia::render('Shirt/Show', ['tshirts' => $tshirts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Shirt/Create');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
      public function store(Request $request)
    {
         $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'required',
        'img' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        'price'=>'required',
        'color'=>'required',
        'size'=>'required'
    ]);
    $image_path = '';
    if ($request->hasFile('img')) {
        // $image_path = $request->file('img')->store('images', 'public');
          $image_path = time().'.'.$request->img->extension();  
        $request->img->move(public_path('imgs'), $image_path);
    
    }
    
     Tshirt::create([
        'name' => $request->name,
        'description' => $request->description,
        'img' => $image_path,
        'price'=>$request->price,
        'color'=>$request->color,
        'size'=>$request->size
    ]);
        // Tshirt::create(
        //     $request->validated()
        // );

        return Redirect()->route('tshirts.index');
    
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tshirt $tshirt)
    {
       return Inertia::render('Shirt/Show', [
            'tshirt' => $tshirt
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Tshirt $tshirt)
    {
        return Inertia::render('Shirt/Edit', [
            'tshirt' => $tshirt
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Tshirt::find($id)->delete();
        return Redirect()->route('tshirts.index');
    
    }
}
