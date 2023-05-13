import { Link, Head, usePage } from "@inertiajs/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import m5 from "@/Images/magicpatter.svg";
import Logo from "@/Images/Logo.png";

export default function Layout({ children }) {
    const { user } = usePage().props;
    return (
        <div
            class="bg-[url('../public/imgs/magicpat.png')]"
            style={{ backgroundImage: `url(${m5})` }}
        >
            <header class="flex  justify-center pt-2 flex-col gap-4 ">
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="{{ asset('favicon.ico') }}"
                />

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
                {user !== null ? (
                    <header class="flex flex-row justify-center mb-2 ">
                        <div className="flex justify-around">
                            <Link
                                class="mr-2 text-sm capitalize text-black hover:scale-105 duration-400"
                                href={route("profile.edit")}
                            >
                                {user.name}
                            </Link>
                            <Link
                                class=" text-sm text-red-500 hover:scale-105 duration-400"
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Logout
                            </Link>
                            <Link
                                href="/cart"
                                class="ml-1 text-sm text-blue-300   hover:scale-105 duration-400"
                            >
                                <ShoppingCartIcon class="h-6 w-6 text-black ml-2 cursor-pointer text-center  hover:scale-105 duration-400" />
                            </Link>
                        </div>
                    </header>
                ) : (
                    <header class="flex flex-row justify-center mb-2 ">
                        <Link
                            class="mr-1 text-sm text-blue-800 font-semibold hover:scale-105 duration-400"
                            href={route("login")}
                        >
                            Log In
                        </Link>
                        <Link
                            href={route("register")}
                            class="ml-1 text-sm text-blue-800  font-semibold hover:scale-105 duration-400"
                        >
                            Register
                        </Link>
                        <Link
                            href="/cart"
                            class="ml-1 text-sm text-blue-800   font-semibold hover:scale-105 duration-400"
                        >
                            <ShoppingCartIcon class="h-6 w-6 text-black ml-2 cursor-pointer text-center  hover:scale-105 duration-400" />
                        </Link>
                    </header>
                )}
            </header>

            <div class="md:container md:mx-auto px-4   ">
                <div class="flex justify-center flex-col  pt-3 border-t ">
                    <div class="flex flex-shrink-0 flex-row justify-center">
                        <Link
                            href="/about"
                            class="  text-orange-600 font-semibold  text-md  p-1 hover:-translate-y-1 duration-500    "
                        >
                            ABOUT
                        </Link>
                        <Link
                            href="/tshirts"
                            class="  text-orange-600 font-semibold text-md  p-1 hover:-translate-y-1 duration-500    "
                        >
                            T-SHIRTS
                        </Link>
                        <Link
                            href="/shuts"
                            class="  text-orange-600 font-semibold text-md  p-1 hover:-translate-y-1 duration-500    "
                        >
                            PHRASES
                        </Link>
                        <Link
                            href="/contact"
                            class="  text-orange-600 font-semibold text-md  p-1 hover:-translate-y-1 duration-500    "
                        >
                            CONTACT
                        </Link>
                    </div>
                </div>
                {children}

                {/* <div class="border-r-2 border-b-2 border-white"> */}
                <div class="text-center font-thin text-black  py-8 px-8 mt-4 text-2xl hover:scale-105 duration-300">
                    Find Us On
                </div>
                <div class="flex justify-center gap-2 p-3">
                    <a
                        href="https://www.facebook.com/craftytshirtsstore"
                        class="hover:scale-105 duration-500 "
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com/craftytshirts"
                        class="hover:scale-105 duration-500 "
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/cratfytshirtsstore/"
                        class="hover:scale-105 duration-500 "
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                </div>
                <div class="text-start tracking-widest text-black  p-2 mt-4 text-md overline">
                    @CraftyTshirtsStore
                </div>
                {/* </div> */}

                <h2 class="text-end text-black">
                    {"Copyright © "}{" "}
                    <Link to="/" alt="" style={{ textDecoration: "none" }}>
                        CraftyTshirtsStore{" "}
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}{" "}
                </h2>
            </div>
        </div>
    );
}
