import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Image from "@/Images/tshirt.png";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-900 p-4 ">
            <div class="flex justify-center items-center text-white   flex-col">
                <div class="flex flex-row  justify-center">
                    
                    <p class="text-center pt-3 text-2xl text-white">
                        <Link href="/">CraftyTshirtsStore</Link>
                    </p>
                </div>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4  dark:bg-gray-800   overflow-hidden sm:rounded">
                {children}
            </div>
        </div>
    );
}
