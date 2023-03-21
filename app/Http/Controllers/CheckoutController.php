<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cart;
use Illuminate\Support\Facades\Auth;
class CheckoutController extends Controller
{
     
    public function index()
    {
         $carts = Cart::latest()->where('user_id', '=', Auth::user()->id)->get();

        return Inertia::render('Checkout/Index', ['carts' => $carts]);
    
    }

     
    public function create()
    {
        //
    }

     
    public function store(Request $request)
    {
        //
    }

     
    public function show($id)
    {
        //
    }

     
    public function edit($id)
    {
        //
    }

     
    public function update(Request $request, $id)
    {
        //
    }

     
    public function destroy($id)
    {
        //
    }
}
