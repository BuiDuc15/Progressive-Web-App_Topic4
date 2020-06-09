<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

// Name this file just like the name of the database (This is the model for that database anyway)
class vocab extends Model
{
    // Enable Mass assignable for the following column
    protected $fillable = ['id', 'name', 'type', 'extra', 'meaning', 'description', 'example'];

    // A vocab (word) can have many of set (1..*)
    public function set(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(set::class);
    }

    // A word can have many of users (1..*)
    public function users(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(User::class);
    }
}
