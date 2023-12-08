<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PurchaseToken;
use App\Models\User;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function register(Request $request){
        try {
            $validator=$request->validate([
                'first_name' => 'required',
                'last_name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:6'
            ]);
            $user = new User();
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->password = $request->password;
            $user->email = $request->email;
            $user->user_type = (count(User::query()->select("*")->limit(1)->get()) == 0);
            $user->save();
            return redirect()->back()->with('success',"Registration successful. Please login!");
        }catch (\Throwable $e){
            echo $e->getMessage();
            return redirect()->back()->with('error',"Registration failure!");
        }
    }
}
