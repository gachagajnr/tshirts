import { usePage, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Show(props) {
    const { tshirts } = usePage().props;

    return (
        <Layout>
            <Head title="Tshuts" />
            <div class="text-white text-4xl text-center p-5 border-t m-2 hover:-translate-y-2 duration-500">
                sHUT dESIGNs
            </div>
            <div class="md:container md:mx-auto px-4   ">
                <div class="container mx-4  px-8 sm:px-0">
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {tshirts.map((tshirt) => {
                                return (
                                    <div class="w-full  h-full  p-4 hover:scale-105 duration:500">
                                        <a class="relative block  overflow-hidden rounded  ">
                                            <img
                                                alt="ecommerce"
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
                                                {tshirt.color}
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
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
