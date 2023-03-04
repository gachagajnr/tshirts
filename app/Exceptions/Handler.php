<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Inertia\Inertia;


class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

     protected $messages = [
        500 => 'Something went wrong',
        503 => 'Service unavailable',
        404 => 'Not found',
        403 => 'Not authorized',
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }



// public function render($request, Throwable $e)
// {
//     $response = parent::render($request, $e);
 
//     if($response->status() == 403) {
//         return redirect()->back()->with('notification', [
//             'color' => 'red',
//             'title' => 'Error',
//             'message'=> $e->getMessage(),
//         ]);
//     }
 
//     return $response;
// }
// public function share(Request $request)
// {
//     return array_merge(parent::share($request), [
//         'flash' => [
//             'notification' => fn () => $request->session()->get('notification')
//         ],
//     ]);
// }
}
