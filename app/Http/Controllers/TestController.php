<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index () {
        //$users = DB::table('users')->get();
        //return $users;
        $users = User::get();
        //return $usuario;
        //return view('test', compact($users));
        return view('test')->with(['users' => $users]);
    }
}
