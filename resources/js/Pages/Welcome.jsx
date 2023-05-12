import { Link, Head, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Image from "@/Images/tshirt.png";
import Tshirt1 from "@/Images/tshirt1.png";
import Tshirt2 from "@/Images/tshirt2.png";
import Tshirt3 from "@/Images/tshirt3.png";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function Welcome(props) {
    const { tshirts, shuts } = usePage().props;
    return (
        <Layout auth={props.auth} errors={props.errors}>
            <Head title='Home'/>
            <div>
                <div class="border-l-2 border-b-2 border-purple-500">
                    <div class="flex justify-center flex-col  pt-6   ">
                        <div class="text-center py-6 text-5xl font-light text-white  hover:-translate-y-2 duration-200 ">
                            Custom Crafted T-Shirts Designs
                        </div>

                        <div class="tracking-tightest text-center  text-6xl border-r-2  hover:text-lime-400  p-2 border-blue-500   mt-2 text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Rock Any Design From Our Catalogue
                        </div>
                        <div class="tracking-tight p-4 my-4 font-light text-center text-3xl border-r-2  hover:translate-x-1 duration-300  text-white    border-lime-400 ">
                            Talk To Us For Custom T-Shirts Branding Solutions
                        </div>

                        <div class="text-center border rounded-md my-5 m-auto w-48 py-3 hover:scale-105 duration-300">
                            <Link
                                href="/contact"
                                // as="button"
                                class="  text-white text-lg font-semibold  hover:text-green-500 rounded-md  "
                            >
                                Talk To Us
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="border-r-2 border-b-2 border-orange-500">
                    <div class="text-end text-white  font-thin p-4 mt-4 text-3xl   transition ease-in-out delay-150  hover:-translate-x-1   duration-300 ">
                        Our T-Shirts Collection
                    </div>

                    <div class="container mx-4  px-8 sm:px-0">
                        <div class="flex flex-wrap  ">
                            {tshirts.length >= 1
                                ? tshirts.map((tshirt) => {
                                      return (
                                          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3  mb-4    ">
                                              <div class="w-full h-full   text-white  p-4">
                                                  <a class="relative block  overflow-hidden rounded  ">
                                                      <img
                                                          alt="tshirt"
                                                          class="block h-full w-full object-cover object-center cursor-pointer"
                                                          src={tshirt.img}
                                                      />
                                                     
                                                  </a>
                                                  <div class="mt-4">
                                                      <div class="flex flex-row justify-between">
                                                          <h3 class="title-font mb-1 text-xs tracking-widest text-white">
                                                              {tshirt.name}
                                                          </h3>
                                                          <h2 class="title-font  text-lg font-medium text-white">
                                                              KES {tshirt.price}
                                                          </h2>
                                                      </div>

                                                      <h2 class="title-font text-xs font-medium text-white">
                                                          All Colors Available
                                                      </h2>
                                                      <h2 class="title-font text-md text-end font-medium text-white">
                                                          {tshirt.description}
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
                                      );
                                  })
                                : []}
                        </div>
                        <div class="tracking-tightest text-center  text-4xl  hover:text-lime-400  my-4 p-6 border-blue-500    text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            <Link href="/tshirts">Explore More Designs</Link>
                        </div>
                    </div>
                </div>

                <div class="border-l-2 border-b-2 py-5 border-green-500">
                    <div class="text-start  p-4 mt-4 text-3xl font-thin text-white hover:translate-x-2 duration-300">
                        About CraftyTshirtsStore
                    </div>
                    <div class="p-3 text-xl leading-relaxed text-white indent-8 italic font-thin tracking-wide text-center">
                        we strongly agree to many uses of words , sometimes to
                        inspire , to affirm, to pass a message, as well as to
                        manifest,
                        <div class="text-md text-blue-400 font thin">
                            we print your choice of words on tshirts to deliver
                            your message to the world and by crafted designs,
                        </div>
                        <div class="text-md text-blue-200 font thin">
                            We do our own words which appear as limited edition
                        </div>
                        where we do a series of phrases for a number of clients
                        with our logo on it You can also request your own
                        customized phrase of your liking.
                    </div>
                    <div class="text-center p-3 mt-4 font-thin    text-4xl tracking-widest text-cyan-500 ">
                        Home of Custom T-shirts
                    </div>
                </div>
                <div class="border-r-2 border-b-2 border-blue-500">
                    <div class="text-end   font-thin p-4 mt-4 text-3xl text-white hover:-translate-x-3 duration-500">
                        Phrases Catalogue
                    </div>

                    <div class="container mx-auto  px-4 sm:px-0">
                        <div class="flex flex-wrap">
                            {shuts.length >= 1
                                ? shuts.map((shut) => {
                                      return (
                                          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-2">
                                              <div class="w-full h-full bg-grey shadow-lg text-white text-center p-3">
                                                  <div class="shadow-md text-center hover:text-blue-300 text-white bg-black p-1 border-gray-50 rounded">
                                                      {shut.name}
                                                  </div>
                                              </div>
                                          </div>
                                      );
                                  })
                                : []}
                        </div>
                    </div>
                    <div class="tracking-tightest text-center  text-4xl  hover:text-lime-400  my-4 p-6 border-blue-500    text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        <Link href="/shuts" as="button">
                            Explore More Phrases
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
