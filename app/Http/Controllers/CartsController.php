<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cart;
use Illuminate\Support\Facades\Auth;
 
class CartsController extends Controller
{
     
    
    public function index()
    {
        $carts = Cart::latest()->where('user_id', '=', Auth::user()->id)->get();

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
                'total'=>'required',
                'id'=>'required'
            ]);
            
            if (Auth::check()) {

            $user= Auth::id();

            Cart::create([
                'name' => $request->name,
                'description' => $request->description,
                'img' => $request->img,
                'price'=>$request->price,
                'color'=>$request->color,
                'size'=>$request->size,
                'quantity'=>$request->quantity,
                'total'=>$request->total,
                'user_id'=>$user,
                'tshirt_id'=>$request->id
            ]);        
            }
           
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
            $quant=$request->get('quantity');
            if(is_null($quant)){
                $cart->size = $request->get('size');
                $cart->save();
            } else {
                $cart->quantity = $request->get('quantity');
                $quat = $request->get('quantity');
                $pri = $request->get('price');
                $finalTotal = $quat * $pri;
                $cart->total = $finalTotal;
                $cart->save();
            }
        }
    
         return redirect()->route('cart.index');
    }
    
    
    public function destroy($id)
    {
        Cart::find($id)->delete();
        return redirect()->route('cart.index');
    }
}
