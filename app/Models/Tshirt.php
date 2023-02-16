<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Tshirt extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'img',
        'description',
        'price',
        'color',
        'size'
    ];

    // public function user(): BelongsTo
    // {
    //     return $this->belongsTo(
    //         related: User::class,
    //         foreignKey: 'user_id',
    //     );
    // }
     protected function img(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('imgs/'.$value),
        );
    }
}
