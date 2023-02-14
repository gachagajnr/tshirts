import { Link, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

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
                    <div class="text-2xl text-start tracking-widest overline ">
                        wORD sHUTS
                    </div>
                    <div class="text-end text-4xl text-gray-500 border-r-2 border-blue-400 p-3 ">
                        your own WORDS on t-Shirts
                    </div>
                    <div class="tracking-tight text-right text-2xl   leading-tight text-rose-600 border-r-2 border-rose-600 p-3 ">
                        Choose from our pHRASES Collection
                    </div>
                    <div class="tracking-tight text-center border-l-2 text-3xl text-rose-600 hover:text-green-600 font-light P-2 border-blue-500 border-spacing-2 mt-2">
                        cHOOSE any dESIGN from oUR cATALOGUE
                    </div>
                    <div class="tracking-tight text-start text-3xl   text-gray-500  m-4 border-green-400 ">
                        talk to uS for cUSTOM dESIGNs
                    </div>
                    <button class="bg-gray-800 text-white p-2  rounded-md w-40 text-center    dark:bg-gray-200 border border-transparent">
                        talk tO uS
                    </button>
                    <div class="flex justify-end gap-3">
                        <div class="text-center border-blue-600    text-5xl text-blue-600 mt-2">
                            are you rEADY?
                        </div>
                        <button class="bg-gray-800 text-white p-2  rounded-md w-40 text-center    dark:bg-blue-200 border border-transparent">
                            start dESIGNING...
                        </button>
                    </div>
                </div>

                <div class="text-end tracking-widest overline p-4 mt-4 text-2xl">
                    tODAY's pICKS
                </div>
                <div class="border-t">
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="w-full p-4 md:w-1/2 lg:w-1/4 shadow-md">
                            <a class="relative block h-96 overflow-hidden rounded">
                                <img
                                    alt="ecommerce"
                                    class="block h-full w-full object-cover object-center cursor-pointer"
                                    src="https://dummyimage.com/421x261"
                                />
                            </a>
                            <div class="mt-4">
                                <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">
                                    PANGA
                                </h3>
                                <h2 class="title-font text-lg font-medium text-gray-900">
                                    KES 700
                                </h2>
                                <p class="mt-1">01/09/2022</p>
                            </div>
                        </div>
                        <div class="w-full p-4 md:w-1/2 lg:w-1/4 shadow-md">
                            <a class="relative block h-96 overflow-hidden rounded">
                                <img
                                    alt="ecommerce"
                                    class="block h-full w-full object-cover object-center cursor-pointer"
                                    src="https://dummyimage.com/421x261"
                                />
                            </a>
                            <div class="mt-4">
                                <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">
                                    ADUI
                                </h3>
                                <h2 class="title-font text-lg font-medium text-gray-900">
                                    KES 700
                                </h2>
                                <p class="mt-1">01/09/2022</p>
                            </div>
                        </div>
                        <div class="w-full p-4 md:w-1/2 lg:w-1/4 shadow-md">
                            <a class="relative block  overflow-hidden rounded h-96">
                                <img
                                    alt="ecommerce"
                                    class="block h-full w-full object-cover object-center cursor-pointer"
                                    src="https://dummyimage.com/421x261"
                                />
                            </a>
                            <div class="mt-4">
                                <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">
                                    LOVE
                                </h3>
                                <h2 class="title-font text-lg font-medium text-gray-900">
                                    KES 700
                                </h2>
                                <p class="mt-1">Available Sizes</p>
                                <p class="mt-0">XXL XL L M S</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center p-3 mt-4 text-3xl tracking-wider">
                    <q>eVERYDAY iTS oWN mESSAGE or a lANGUAGE yOU cHOOSE</q>
                </div>
                <div class="text-start tracking-widest overline p-4 mt-4 text-2xl">
                    aBOUT t-SHUT Wrld
                </div>
                <div class="p-3 text-xl leading-relaxed indent-8 italic font-thin tracking-wide text-center">
                    we strongly agree to many uses of words , sometimes to
                    inspire , to affirm, to pass a message, as well as to
                    manifest, we print you words on tshirts to deliver your
                    message to the world We do our own words which appear as
                    limited edition where we do a series of phrases for a number
                    of clients with our logo on it You can also request your own
                    customized phrase at your own pace
                </div>
                <div class="text-end tracking-widest overline p-4 mt-4 text-2xl">
                    pHRASES cATALOGUE
                </div>
                <div class="flex flex-wrap justify-center">
                    <ul class="list-disc">
                        <li>Be Kind</li>
                        <li>Spread Love</li> <li>Be Kind</li> <li>Be Kind</li>
                        <li>Be Kind</li> <li>Be Kind</li>
                    </ul>
                </div>
                <div class="text-center tracking-widest overline p-4 mt-4 text-2xl">
                    oUR sERVICE
                </div>
                <div class="flex flex-wrap justify-center font-thin text-4xl text-blue-600 text-center">
                    jUST t-sHIRT bRANDING
                </div>
                <div class="text-start tracking-widest overline p-4 mt-4 text-2xl">
                    fIND uS oN 
                </div>
                <div class="flex justify-start gap-2 p-3">
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

                <h2 class="text-center">
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
