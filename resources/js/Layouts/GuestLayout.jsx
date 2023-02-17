import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Image from "@/Images/tshirt.png";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-900 p-4 ">
            <div class="flex justify-center items-center text-white   flex-col">
                <Link href="/">
                    <img
                        class="h-14 w-14   cursor-pointer"
                        src={Image}
                        alt="Tshut Wrld"
                    />
                    <div class="text-center text-2xl">tSHUT wRLD</div>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4  dark:bg-gray-800 shadow-md overflow-hidden sm:rounded">
                {children}
            </div>
        </div>
    );
}
