<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Tshirt extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'url',
        'description',
        'user_id',
        'price',
        'color',
        'size'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(
            related: User::class,
            foreignKey: 'user_id',
        );
    }
}
