<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tshirt;
use App\Http\Requests\StoreTshirtRequest;

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
        $image_path = $request->file('img')->store('tshirts', 'public');
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

        return to_route('tshirts.index');
    
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
            'event' => $tshirt->only(
              'name',
              'size',
               
            ),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($tshirt)
    {
        return Inertia::render('Shirt/Edit', [
            'tshirt' => [
                'id' => $tshirt->id,
                'name' => $tshirt->name,
                'size' => $tshirt->size
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreTshirtRequest $request, Tshirt $tshirt)
    {
        $tshirt->update($request->validated());

            return to_route('tshirts.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tshirt $tshirt)
    {
        {
        $tshirt->delete();

            return to_route('tshirts.index');
    }
    }
}
