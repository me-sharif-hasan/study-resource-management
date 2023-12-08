<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Classes extends Model
{
    use HasFactory;

    public function course():HasOne{
        return $this->hasOne(Courses::class,'id','course_id');
    }
    public function materials():HasMany{
        return $this->hasMany(Materials::class,'class_id','id');
    }
}
