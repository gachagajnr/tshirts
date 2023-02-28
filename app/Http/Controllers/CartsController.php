<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cart;
 
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
                'size'=>'required',
                'quantity'=>'required',
                'total'=>'required'
            ]);
            
            
            Cart::create([
                'name' => $request->name,
                'description' => $request->description,
                'img' => $request->img,
                'price'=>$request->price,
                'color'=>$request->color,
                'size'=>$request->size,
                'quantity'=>$request->quantity,
                'total'=>$request->total,
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
      

        $cart = Cart::find($id);

         if($cart) {
             $cart->quantity = $request->get('quantity');
            $quat=$request->get('quantity');
            $pri=$request->get('price');
            $finalTotal = $quat * $pri;
            $cart->total = $finalTotal;
            $cart->save();
        }
    
         return redirect()->route('cart.index');
    }
    
    
    public function destroy($id)
    {
        Cart::find($id)->delete();
        return redirect()->route('cart.index');
    }
}
