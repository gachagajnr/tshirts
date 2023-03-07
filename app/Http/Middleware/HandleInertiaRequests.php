<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\Tshirt;
use App\Models\Shuts;


use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'user' =>   $request->user(),
            
            'tshirts' => 
               Tshirt::latest()->get()
            ,
            'shuts' => 
               Shuts::latest()->get()

            ,
            // 'tshirts' => config('app.name'),
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'flash' => [
                // in your case, you named your flash message "success"
                'message' => fn () => $request->session()->get('message')
            ],
            'roles' => $request->user() ? $request->user()->roles->pluck('name') : [],
            'permissions' => $request->user() ? $request->user()->getPermissionsViaRoles()->pluck('name') : [],
        
        ]);
    }
}
