<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact;
 
class ContactController extends Controller
{
    
    public function index()
    {
         return Inertia::render('Contact/Index' );
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'firstname' => 'required',
            'lastname' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'question' => 'required'
        ]);

        Contact::create($request->all());

        return back()->with('success', 'Thanks for contacting me, I will get back to you soon!');
    }
    
   
}
