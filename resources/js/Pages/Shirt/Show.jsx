import { usePage } from "@inertiajs/react";
export default function Show(props) {
    const { tshirts } = usePage().props;

    
    return (
        <div>
            Shirts
           
            <div class="container mx-4  px-8 sm:px-0">
                <div class="flex flex-wrap  ">
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3  mb-4    ">
                        {tshirts.map((tshirt) => {
                            return (
                                <div class="w-full h-full   text-black  p-4">
                                    <a class="relative block  overflow-hidden rounded  ">
                                        <img
                                            alt="ecommerce"
                                            class="block h-full w-full object-cover object-center cursor-pointer"
                                            src={tshirt.img}
                                        />
                                    </a>
                                    <div class="mt-4">
                                        <h3 class="title-font mb-1 text-xs tracking-widest text-black">
                                            {tshirt.name}
                                        </h3>
                                        <h2 class="title-font text-lg font-medium text-black">
                                            KES {tshirt.price}
                                        </h2>
                                        <h2 class="title-font text-lg font-medium text-black">
                                            Colors {tshirt.color}
                                        </h2>
                                        <h2 class="title-font text-lg font-medium text-black">
                                            Description {tshirt.description}
                                        </h2>
                                        <p class="mt-1 text-black">
                                            Available Sizes
                                        </p>
                                        <p class="mt-0 text-black">
                                            XXL XL L M S
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
