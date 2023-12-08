<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use http\Client\Curl\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request){
        $validator=$request->validate([
            'email'=>'email|required',
            'password'=>'required'
        ]);
        try{
            $user=\App\Models\User::query()->select('*')->where('email','=',$request->email)->limit(1)->get()[0];
            $cred=$request->only(['email','password']);
            $rem=strtolower($request->remember)=='on';
            if(Auth::attempt($cred,$rem)){
                return redirect()->route('user-dashboard');
            }else throw new \Exception("Error");
        }catch (\Throwable $e){
            echo $e->getMessage();
            return redirect()->back()->with('error','Email or password mismatch!');
        }
    }
}
