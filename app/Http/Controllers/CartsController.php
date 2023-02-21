<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cart;
use Illuminate\Support\Facades\Validator;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
             $cart = Cart::latest()->get();

        return Inertia::render('Carts/Index', ['cart' => $cart]);
    
    }

     public function create()
    {
        return Inertia::render('Carts/Create');
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
        ])->validate();
   
        Cart::create($request->all());
    
        return redirect()->route('carts.index');
    }
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(Cart $post)
    {
        return Inertia::render('Carts/Edit', [
            'post' => $post
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
        ])->validate();
    
        Cart::find($id)->update($request->all());
        return redirect()->route('carts.index');
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        Cart::find($id)->delete();
        return redirect()->route('carts.index');
    }
}
