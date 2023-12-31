<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Courses extends Model
{
    use HasFactory;
    public function user():HasOne{
        return $this->hasOne(User::class,'id','user_id');
    }
    public function classes():HasMany{
        return $this->hasMany(Classes::class,'course_id','id');
    }
}
