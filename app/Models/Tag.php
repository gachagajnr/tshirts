<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Tag extends Model
{
    use HasFactory;
       protected $fillable = [
        'name',
        'slug',
    ];
 
    public $timestamps = false;
     public function tshirts(): BelongsToMany
    {
        return $this->belongsToMany(
            related: Tshirt::class,
            table: 'tshirt_tag',
        );
    }
}
