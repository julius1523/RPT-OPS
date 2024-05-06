<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('mobileno', 'password');

        if (Auth::attempt($credentials)) {
            $user = $request->user();
            $name = $user->first_name;
            $token = $request->user()->createToken('authToken')->plainTextToken;
            return response()->json(['token' => $token, 'name' => $name], 200);
        }

        return response()->json(['message' => 'Unauthorized'], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out'], 200);
    }
}
