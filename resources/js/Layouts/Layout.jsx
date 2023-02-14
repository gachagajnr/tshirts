import { Link, Head } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div class='bg-white p-4'>
            <Head title="Tshuts Wrld" />
            <header class="flex  justify-center pt-2 flex-col gap-4 ">
                <p class="text-center pt-3 text-2xl">Tshuts Wrld</p>
                <header className="flex flex-row justify-center ">
                    <Link
                        className="mr-1 text-sm text-green-700"
                        href={route("login")}
                    >
                        Log in
                    </Link>

                    <Link
                        href={route("register")}
                        className="ml-1 text-sm text-blue-700 dark:text-gray-500 "
                    >
                        Register
                    </Link>
                </header>
            </header>

            <body>{children}</body>
        </div>
    );
}
