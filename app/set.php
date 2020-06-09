<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class set extends Model
{
    //
    protected $fillable = ['set_id', 'set_name'];

    public function vocab(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(vocab::class);
    }
    public function users(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(User::class);
    }
}
