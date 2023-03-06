<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tshirt;
use Illuminate\Contracts\View\View;


class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function __invoke(Request $request): View
    // {
    //     return view('dashboard', [
    //         'tshirts' => Tshirt::query()
    //             ->where('user_id', auth()->id())
    //             ->get()
    //     ]);
    // }
}
