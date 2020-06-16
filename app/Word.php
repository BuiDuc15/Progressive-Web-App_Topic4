<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    // Allow Mass DB assign for these value field
    protected $fillable = ['name', 'type', 'extra', 'meaning', 'pronunciation', 'description', 'example'];
}
