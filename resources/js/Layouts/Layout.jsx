import { Link, Head } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div class="bg-slate-900 p-4">
            <Head title="Tshuts Wrld" />
            <header class="flex  justify-center pt-2 flex-col gap-4 ">
                <p class="text-center pt-3 text-2xl text-white" >tSHUTwRLD</p>
                <header className="flex flex-row justify-center ">
                    <Link
                        className="mr-1 text-sm text-blue-200"
                        href={route("login")}
                    >
                        lOG iN
                    </Link>

                    <Link
                        href={route("register")}
                        className="ml-1 text-sm text-blue-300 dark:text-gray-500 "
                    >
                        rEGISTER
                    </Link>
                </header>
            </header>

            <body>{children}</body>
        </div>
    );
}
