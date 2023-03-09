<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
        'selectedSize',
        'quantity',
        'total',
        'user_id',
        'tshirt_id'
    ];
    public function tshirt() { 
        return $this->belongsTo(Tshirt::class); 
    }  
 
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
