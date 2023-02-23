<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cart;
use Illuminate\Support\Facades\Validator;

class CartsController extends Controller
{
     
    public function index()
    {
        $carts = Cart::latest()->get();

        return Inertia::render('Carts/Index', ['carts' => $carts]);
    
    }

    
 public function store(Request $request)
    {
        $request->validate([
                'name' => 'required',
                'description' => 'required',
                'img' => 'required',
                'price'=>'required',
                'color'=>'required',
                'size'=>'required'
            ]);
            
            
            Cart::create([
                'name' => $request->name,
                'description' => $request->description,
                'img' => $request->img,
                'price'=>$request->price,
                'color'=>$request->color,
                'size'=>$request->size
            ]);
            session()->flash('success', 'Product is Added to Cart Successfully !');
        
            return redirect()->route('cart.index');
    }     
    
   
    public function edit(Cart $cart)
    {
        return Inertia::render('Carts/Edit', [
            'cart' => $cart
        ]);
    }
    
     
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
        ])->validate();
    
        Cart::find($id)->update($request->all());
        return redirect()->route('carts.index');
    }
    
    
    public function destroy($id)
    {
        Cart::find($id)->delete();
        return redirect()->route('carts.index');
    }
}
