import { Link, Head, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Image from "@/Images/tshirt.png";
import Tshirt1 from "@/Images/tshirt1.png";
import Tshirt2 from "@/Images/tshirt2.png";
import Tshirt3 from "@/Images/tshirt3.png";

// import { InertiaLink, useForm } from "@inertiajs/ireact";
// var item = items[Math.floor(Math.random()*items.length)];

export default function Welcome(props) {
    const { tshirts } = usePage().props;
    console.log(tshirts);
    return (
        <Layout>
            <Head title="Tshuts" />
            <div class="md:container md:mx-auto px-4   ">
                <div class="flex justify-center flex-col  pt-3 border-t ">
                    <div class="flex-shrink-0">
                        <img
                            class="h-14 w-14   cursor-pointer"
                            src={Image}
                            alt="Tshut Wrld"
                        />
                    </div>

                    <div class="text-center text-2xl text-white border-r-2 border-blue-400 p-3 hover:-translate-y-2 duration-200 ">
                        your own WORDS on t-Shirts
                    </div>
                    <div class="tracking-tight text-right text-2xl hover:-translate-x-1 duration-150  leading-tight text-amber-500 border-l-2 border-rose-600 p-3 ">
                        Choose from our pHRASES Collection
                    </div>
                    <div class="tracking-tight text-center border-l-2 text-5xl   hover:text-lime-400 font-thin p-2 border-blue-500 border-spacing-2 mt-2 text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        cHOOSE any dESIGN from oUR cATALOGUE
                    </div>
                    <div class="tracking-tight text-start text-2xl border-r-2 hover:translate-x-1 duration-300  text-white  m-4 border-green-400 ">
                        talk to uS for cUSTOM sOLUTIONs
                    </div>
                    <button class="bg-gray-800 text-white p-2 hover:translate-y-2 duration-500 rounded-md w-40 text-center    dark:bg-gray-200 border border-white">
                        talk tO uS
                    </button>
                    <div class="flex justify-end gap-3">
                        <div class="text-center     text-5xl text-amber-500 mt-2">
                            rEADY?
                        </div>
                        <button
                            type="submit"
                            class="bg-gray-800 hover:translate-x-3 duration-300 text-white p-2 h-10 rounded-md w-40 text-center  border-2    border-white bg-clip-text bg-gradient-to-r from-purple-400 to-lime-600"
                        >
                            <Link
                                className="mr-1 text-sm text-blue-200"
                                // href={route("designs")}
                            >
                                start dESIGNING...
                            </Link>
                        </button>
                    </div>
                </div>

                <div class="text-end text-white tracking-widest overline p-4 mt-4 text-2xl brightness-100 transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-90 duration-300 ">
                    oUR dESIGNS
                </div>

                <div class="container mx-4  px-8 sm:px-0">
                    <div class="flex flex-wrap  ">
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3  mb-4    ">
                            <div class="w-full h-full   text-white  p-4">
                                <a class="relative block  overflow-hidden rounded  ">
                                    <img
                                        alt="ecommerce"
                                        class="block h-full w-full object-cover object-center cursor-pointer"
                                        src={Tshirt1}
                                    />
                                    <h1 class="absolute text-sm text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        tSHUT wRLD
                                    </h1>
                                </a>
                                <div class="mt-4">
                                    <div class="flex flex-row justify-between">
                                        <h3 class="title-font mb-1 text-xs tracking-widest text-white">
                                            tSHUT wRLD
                                        </h3>
                                        <h2 class="title-font  text-lg font-medium text-white">
                                            KES 700
                                        </h2>
                                    </div>

                                    <h2 class="title-font text-xs font-medium text-white">
                                        All Colors Available
                                    </h2>
                                    <h2 class="title-font text-md text-end font-medium text-white">
                                        tWRLD
                                    </h2>
                                    <div class="flex flex-row justify-between">
                                        <p class="mt-1 text-white font-light text-xs">
                                            Available Sizes:
                                        </p>
                                        <p class="mt-0 text-white text-sm ">
                                            XXL XL L M S
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3  mb-4   ">
                            <div class="w-full h-full   text-white  p-4">
                                <a class="relative block  overflow-hidden rounded  ">
                                    <img
                                        alt="ecommerce"
                                        class="block h-full w-full object-cover object-center cursor-pointer"
                                        src={Tshirt2}
                                    />
                                    <h1 class="absolute text-sm text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        lIVE
                                        <br /> lOVE
                                        <br /> lAUGH
                                    </h1>
                                </a>
                                <div class="mt-4">
                                    <div class="flex flex-row justify-between">
                                        <h3 class="title-font mb-1 text-xs tracking-widest text-white">
                                            lIFE
                                        </h3>
                                        <h2 class="title-font  text-lg font-medium text-white">
                                            KES 700
                                        </h2>
                                    </div>

                                    <h2 class="title-font text-xs font-medium text-white">
                                        All Colors Available
                                    </h2>
                                    <h2 class="title-font text-md text-end font-medium text-white">
                                        3Ls
                                    </h2>
                                    <div class="flex flex-row justify-between">
                                        <p class="mt-1 text-white font-light text-xs">
                                            Available Sizes:
                                        </p>
                                        <p class="mt-0 text-white text-sm ">
                                            XXL XL L M S
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3   mb-4    ">
                            <div class="w-full h-full    text-white  p-4">
                                <a class="relative block  overflow-hidden rounded  ">
                                    <img
                                        alt="ecommerce"
                                        class="block h-full w-full object-cover object-center cursor-pointer"
                                        src={Tshirt3}
                                    />
                                    <h1 class="absolute text-xs text-end text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        MONEY
                                        <br /> WALK
                                        <br /> BULLSHIT
                                        <br />
                                        TALK
                                    </h1>
                                </a>
                                <div class="mt-4">
                                    <div class="flex flex-row justify-between">
                                        <h3 class="title-font mb-1 text-xs tracking-widest text-white">
                                            aDVICE
                                        </h3>
                                        <h2 class="title-font  text-lg font-medium text-white">
                                            KES 700
                                        </h2>
                                    </div>

                                    <h2 class="title-font text-xs font-medium text-white">
                                        All Colors Available
                                    </h2>
                                    <h2 class="title-font text-md text-end font-medium text-white">
                                        Give Advice
                                    </h2>
                                    <div class="flex flex-row justify-between">
                                        <p class="mt-1 text-white font-light text-xs">
                                            Available Sizes:
                                        </p>
                                        <p class="mt-0 text-white text-sm ">
                                            XXL XL L M S
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-amber-500  text-center p-4 overline text-3xl cursor-pointer hover:text-white-500 hover:scale-y-105 duration-300">
                        <Link href="/tshirts" as="button">
                            eXPLORE mORE dESIGNs
                        </Link>
                    </div>
                </div>

                <div class="text-center p-3 mt-4 font-thin font-mono text-4xl tracking-wider text-cyan-500 ">
                    <q>eVERYDAY iTS oWN mESSAGE or a lANGUAGE yOU cHOOSE</q>
                </div>
                <div class="text-start tracking-widest overline p-4 mt-4 text-2xl text-white hover:translate-x-2 duration-300">
                    aBOUT t-SHUT Wrld
                </div>
                <div class="p-3 text-xl leading-relaxed text-white indent-8 italic font-thin tracking-wide text-center">
                    we strongly agree to many uses of words , sometimes to
                    inspire , to affirm, to pass a message, as well as to
                    manifest,
                    <div class="text-md text-blue-400 font thin">
                        we print your choice of words on tshirts to deliver your
                        message to the world and by crafted designs,
                    </div>
                    <div class="text-md text-blue-200 font thin">
                        We do our own words which appear as limited edition
                    </div>
                    where we do a series of phrases for a number of clients with
                    our logo on it You can also request your own customized
                    phrase at your own pace
                </div>
                <div class="text-end tracking-widest overline p-4 mt-4 text-2xl text-white hover:-translate-x-3 duration-500">
                    pHRASES cATALOGUE
                </div>

                <div class="container mx-auto  px-4 sm:px-0">
                    <div class="flex flex-wrap">
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-2">
                            <div class="w-full h-full bg-grey shadow-lg text-white text-center p-3">
                                <div class="shadow-md text-center hover:text-blue-300 text-white bg-black p-1 border-gray-50 rounded">
                                    Be Kind
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-2">
                            <div class="w-full h-full bg-grey shadow-lg text-white text-center p-3">
                                <div class="shadow-md text-center hover:text-blue-300 text-white bg-black p-1 border-gray-50 rounded">
                                    Be Kind
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-2">
                            <div class="w-full h-full bg-grey shadow-lg text-white text-center p-3">
                                <div class="shadow-md text-center hover:text-blue-300 text-white bg-black p-1 border-gray-50 rounded">
                                    Be Kind
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-2">
                            <div class="w-full h-full bg-grey shadow-lg text-white text-center p-3">
                                <div class="shadow-md text-center hover:text-blue-300 text-white bg-black p-1 border-gray-50 rounded">
                                    Be Kind
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-2">
                            <div class="w-full h-full bg-grey shadow-lg text-white text-center p-3">
                                <div class="shadow-md text-center hover:text-blue-300 text-white bg-black p-1 border-gray-50 rounded">
                                    Be Kind
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-2">
                            <div class="w-full h-full bg-grey shadow-lg text-white text-center p-2">
                                <div class="shadow-md text-center hover:text-blue-300 text-white bg-black p-1 border-gray-50 rounded">
                                    Be Kind
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-blue-300 text-end p-4 m-4 cursor-pointer hover:text-red-500 hover:scale-y-105 duration-75">
                    Explore Full Catalogue
                </div>
            </div>
        </Layout>
    );
}
