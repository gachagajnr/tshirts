import { Link, Head } from '@inertiajs/react';
 
export default function Welcome(props) {
    return (
        <>
            <Head title="Tshuts" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Tshuts Wrld
                        </Link>
                    ) : (
                         
                        <header className="flex items-center justify-space-around p-1">
                        <h6 className="m-3 ">Tshuts Wrld</h6>
                        
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 ">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 "
                            >
                                Register
                            </Link>
                        </header>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                   Welcome
                </div>
            </div>
        </>
    );
}
