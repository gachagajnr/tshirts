<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;

class Contact extends Model
{
    use HasFactory;

        public $fillable = ['firstname', 'lastname', 'email', 'phone', 'question'];

         public static function boot() {
  
        parent::boot();
  
        static::created(function ($item) {
                
            $adminEmail = "williampius17@gmail.com";
            Mail::to($adminEmail)->send(new ContactMail($item));
        });
    }
}
