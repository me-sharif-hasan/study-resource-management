<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PurchaseToken;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use PhpParser\Parser\Tokens;

class UserController extends Controller
{
    public function getProfile(){
        $user=Auth::user();
        $courses=$user->courses;
        $user->course_count=count($courses);
        $user->class_count=0;
        $user->material_count=0;
        foreach ($courses as $course){
            $user->class_count+=count($course->classes);
            foreach ($course->classes as $class){
                $user->material_count+=count($class->materials);
            }
        }
        unset($user->courses);
        return Auth::user();
    }

    public function updateUser(){
        try {
            $data = \request()->json()->all();
            if ($data['password'] != '') {
                $data['password'] = Hash::make($data['password']);
            }else{
                unset($data['password']);
            }
            unset($data['class_count']);
            unset($data['material_count']);
            unset($data['course_count']);
            unset($data['created_at']);
            unset($data['updated_at']);
            User::query()->where('id', '=', Auth::user()->id)->update($data);
        }catch (\Throwable $e){
            echo $e->getMessage();
        }
    }

    public function logout(){
        \auth()->logout();
        return redirect()->route('login');
    }


    public function ct(){
       for($i=0;$i<10;$i++){
           $token=new PurchaseToken();
           $token->token=uniqid();
           $token->save();
       }
    }
    public function gt(){
        return PurchaseToken::all();
    }
}
