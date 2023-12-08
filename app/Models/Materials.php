<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Materials extends Model
{
    use HasFactory;
    public function itsClass():HasOne{
        return $this->hasOne(Classes::class,'id','class_id');
    }
}
