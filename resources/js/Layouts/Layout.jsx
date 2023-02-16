import { Link, Head } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div class="bg-slate-900 p-4">
            <Head title="Tshuts Wrld" />
            <header class="flex  justify-center pt-2 flex-col gap-4 ">
                <p class="text-center pt-3 text-2xl text-white">tSHUTwRLD</p>
                <header className="flex flex-row justify-center ">
                    <Link
                        className="mr-1 text-sm text-blue-200 hover:scale-105 duration-400"
                        href={route("login")}
                    >
                        lOG iN
                    </Link>

                    <Link
                        href={route("register")}
                        className="ml-1 text-sm text-blue-300 dark:text-gray-500 hover:scale-105 duration-400"
                    >
                        rEGISTER
                    </Link>
                </header>
            </header>

            <body>{children}</body>
            <div class="text-center tracking-widest overline p-4 mt-4 text-2xl text-white hover:scale-105 duration-200">
                    oUR sERVICE
                </div>
            <div class="flex flex-wrap justify-center font-thin text-4xl p-4 text-blue-600 text-center">
                ~jUST t-sHIRT bRANDING~
            </div>
            <div class="text-center tracking-widest text-white overline p-4 mt-4 text-2xl hover:scale-75 duration-300">
                fIND uS oN
            </div>
            <div class="flex justify-center gap-2 p-3">
                <div href="" class="text-blue-500">
                    Facebook
                </div>
                <div href="" class="text-blue-500">
                    Instagram
                </div>
                <div href="" class="text-blue-500">
                    Twitter
                </div>
            </div>
            <div class="text-start tracking-widest text-white  p-2 mt-4 text-md overline">
                @tSHUTwRLD
            </div>
            <h2 class="text-end text-white">
                {"Copyright © "}{" "}
                <Link to="/" alt="" style={{ textDecoration: "none" }}>
                    TshutWrld{" "}
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}{" "}
            </h2>
        </div>
    );
}
