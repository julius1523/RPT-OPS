<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function save(Request $data)
    {
        if (User::where('email', $data->email)->exists()) {
            return 1;
        }

        if (User::where('mobileno', $data->mobileno)->exists()) {
            return 2;
        }

        if (User::where('username', $data->username)->exists()) {
            return 3;
        }

        // Retrieve the latest user record to get the unique number
        $latestUser = User::latest('id')->first();

        // Extract the unique number and increment it
        $lastAccNo = $latestUser ? intval(substr($latestUser->accno, 7)) : 0;
        $newAccNo = 'USR2023' . str_pad($lastAccNo + 1, 4, '0', STR_PAD_LEFT);

        User::create([
            'first_name' => $data->first_name,
            'last_name' => $data->last_name,
            'mobileno' => $data->mobileno,
            'email' => $data->email,
            'address' => $data->address,
            'username' => $data->username,
            'password' => bcrypt($data->password),
            'accno' => $newAccNo,
        ]);

        return 0;
    }

    public function updateaccinfo(Request $request)
    {
        $userId = auth()->user()->id;

        if (User::where('email', $request->email)->where('id', '!=', $userId)->exists()) {
            return response()->json(['val' => 1, 'icon' => 'error', 'title' => 'Update Failed', 'text' => 'Email is already taken by somebody else.'], 400);
        }

        if (User::where('mobileno', $request->mobileno)->where('id', '!=', $userId)->exists()) {
            return response()->json(['val' => 2, 'icon' => 'error', 'title' => 'Update Failed', 'text' => 'Mobile No. is already taken by somebody else.'], 400);
        }

        if (User::where('username', $request->username)->where('id', '!=', $userId)->exists()) {
            return response()->json(['val' => 3, 'icon' => 'error', 'title' => 'Update Failed', 'text' => 'Username is already taken by somebody else.'], 400);
        }

        User::where('id', $userId)->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'mobileno' => $request->mobileno,
            'email' => $request->email,
            'address' => $request->address,
            'username' => $request->username,
        ]);

        return response()->json(['val' => 0, 'icon' => 'error', 'title' => 'Update Successful', 'text' => 'You have successfully updated your account info!'], 200);
    }

    public function getaccinfo()
    {
        $user = auth()->user();

        if ($user) {
            return [
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'mobileno' => $user->mobileno,
                'email' => $user->email,
                'address' => $user->address,
                'username' => $user->username,
                'accno' => $user->accno,
            ];
        }
        return [];
    }


    public function changepass(Request $request)
    {
        $user = auth()->user();

        if (password_verify($request->password, $user->password)) {
            return 1;
        }

        User::where('id', $user->id)->update([
            'password' => bcrypt($request->password),
        ]);
        return 0;
    }

    public function user() {
        $user = auth()->user();
        
        if ($user) {
            return [
                'initials' => substr($user->first_name, 0, 1) . substr($user->last_name, 0, 1),
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
            ];
        }
    }
}
