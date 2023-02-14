import { Link, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Image from "@/Images/tshirt.png";
export default function Welcome(props) {
    let tshirts = [
        {
            name: "Maroon",
            color: "Red",
            size: "XL",
            description: "A maroon Tshirt",
        },
        {
            name: "Maroon",
            color: "Red",
            size: "XL",
            description: "A maroon Tshirt",
        },
        {
            name: "Maroon",
            color: "Red",
            size: "XL",
            description: "A maroon Tshirt",
        },
    ];
    let links = [
        {
            name: "Maroon",
            color: "Red",
            size: "XL",
            description: "A maroon Tshirt",
        },
        {
            name: "Maroon",
            color: "Red",
            size: "XL",
            description: "A maroon Tshirt",
        },
        {
            name: "Maroon",
            color: "Red",
            size: "XL",
            description: "A maroon Tshirt",
        },
    ];
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
                    tODAY's pICKS
                </div>
                <div class="  mt-5 p-4">
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="w-full p-4 md:w-1/2 lg:w-1/4 rounded-md shadow-md border-2 border-cyan-500 hover:scale-105 duration-500">
                            <a class="relative block h-96 overflow-hidden rounded ">
                                <img
                                    alt="ecommerce"
                                    class="block h-full w-full object-cover object-center cursor-pointer"
                                    src="https://dummyimage.com/421x261"
                                />
                            </a>
                            <div class="mt-4">
                                <h3 class="title-font mb-1 text-xs tracking-widest text-white">
                                    PANGA
                                </h3>
                                <h2 class="title-font text-lg font-medium text-white">
                                    KES 700
                                </h2>
                                <p class="mt-1 text-white">01/09/2022</p>
                            </div>
                        </div>
                        <div class="w-full p-4 md:w-1/2 lg:w-1/4   rounded-md shadow-md border-2 border-cyan-500 hover:scale-105 duration-500">
                            <a class="relative block h-96 overflow-hidden rounded">
                                <img
                                    alt="ecommerce"
                                    class="block h-full w-full object-cover object-center cursor-pointer"
                                    src="https://dummyimage.com/421x261"
                                />
                            </a>
                            <div class="mt-4">
                                <h3 class="title-font mb-1 text-xs tracking-widest text-white">
                                    ADUI
                                </h3>
                                <h2 class="title-font text-lg font-medium text-white">
                                    KES 700
                                </h2>
                                <p class="mt-1 text-white">01/09/2022</p>
                            </div>
                        </div>
                        <div class="w-full p-4 md:w-1/2 lg:w-1/4 shadow-md rounded-md   border-2 border-cyan-500 hover:scale-105 duration-500">
                            <a class="relative block  overflow-hidden rounded h-96">
                                <img
                                    alt="ecommerce"
                                    class="block h-full w-full object-cover object-center cursor-pointer"
                                    src="https://dummyimage.com/421x261"
                                />
                            </a>
                            <div class="mt-4">
                                <h3 class="title-font mb-1 text-xs tracking-widest text-white">
                                    LOVE
                                </h3>
                                <h2 class="title-font text-lg font-medium text-white">
                                    KES 700
                                </h2>
                                <p class="mt-1 text-white">Available Sizes</p>
                                <p class="mt-0 text-white">XXL XL L M S</p>
                            </div>
                        </div>
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
                <div class="flex flex-wrap justify-center">
                    <div class="grid grid-cols-4 gap-4">
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Be Kind
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Be Awesome
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Kings Chase Crowns not clowns
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Be Kind
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Be Kind
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Be Awesome
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Kings Chase Crowns not clowns
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Be Kind
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Be Kind
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Be Awesome
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Kings Chase Crowns not clowns
                        </div>
                        <div class="shadow-md text-center hover:text-blue-200 text-white bg-black p-1 border-gray-50 rounded">
                            Be Kind
                        </div>
                    </div>
                </div>
                <div class="text-blue-300 text-end p-4 m-4 cursor-pointer hover:text-red-500 hover:scale-y-105 duration-75">
                    Explore Full Catalogue
                </div>
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

                {tshirts.map((shirt) => {
                    <div>{shirt.name}</div>;
                })}
            </div>
        </Layout>
    );
}
