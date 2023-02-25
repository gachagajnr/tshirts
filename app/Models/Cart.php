<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Cart extends Model
{
    use HasFactory;

     protected $fillable = [
        'name',
        'img',
        'description',
        'price',
        'color',
        'size',
        'quantity'
    ];
    //  protected function img(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => url('imgs/'.$value),
    //     );
    // }
}
