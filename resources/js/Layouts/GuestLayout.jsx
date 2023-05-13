import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import m5 from "@/Images/magicpatter.svg";
import Logo from "@/Images/Logo.png";

export default function Guest({ children }) {
    return (
        <div
            className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0  p-4 "
            style={{ backgroundImage: `url(${m5})` }}
        >
            <div class="flex justify-center items-center text-black   flex-col">
                <div class="flex flex-row  justify-center">
                    <img
                        class="h-12 w-12 cursor-pointer"
                        src={Logo}
                        alt="Crafty Tshirts"
                    />
                    <p class="text-center pt-3 text-2xl text-black">
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
