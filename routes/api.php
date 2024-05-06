<?php

use Illuminate\Support\Facades\Route;

//Log In
Route::post('login', 'Auth\LoginController@login');
//Sign Up
Route::post('signup/save', 'UserController@save');

//Register Controller
Route::post('records/registerProperty', 'RegisterController@registerProperty');

//Authenticated Functions
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', 'Auth\LoginController@logout');

    //Register Controller
        //Update Attachment
        Route::post('records/updateAttachment', 'RegisterController@updateAttachment');
        //Cancel Registration
        Route::post('records/cancelRegister', 'RegisterController@cancelRegister');

    //Property Controller
        //Update Nickname
        Route::post('records/updatenick', 'PropertyController@updatenick');
        //Retrieve Pending Property Registration
        Route::get('records/getRegisterPending', 'PropertyController@getRegisterPending');
        //Retrieve Registered Property
        Route::get('records/getRegisteredProperty', 'PropertyController@getRegisteredProperty');

    //User Controller
        //Retrieve User Info
        Route::get('user/getaccinfo', 'UserController@getaccinfo');
        //Update User Info
        Route::post('user/updateaccinfo', 'UserController@updateaccinfo');
        //Change Password
        Route::post('user/changepass', 'UserController@changepass');

        //Current Logged In User
        Route::get('user/user', 'UserController@user');

    //SOA
    Route::post('soa/requestSOA', 'SoaController@requestSOA');
    Route::post('soa/cancelRequest', 'SoaController@cancelRequest');
    Route::get('soa/getSoaRequest', 'SoaController@getSoaRequest');
});
