import { usePage, Head, Link, useForm, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Index(props) {
    const { carts } = usePage().props;
 
    function destruct(e) {
        if (confirm("Are you sure you want to delete this cart?")) {
            router.delete(route("cart.destroy", e.currentTarget.id));
        }
    }
    return (
        <Layout>
            <Head title="Tshuts" />
            <div class="text-white text-4xl text-center p-5 border-t m-2 hover:-translate-y-2 duration-500">
                mY sHUT cART
            </div>

            <div class="md:container md:mx-auto px-4   ">
                <div class="text-red-500 text-end hover:-translate-x-2 duration-500 my-3">
                    <Link as="button" href="/tshirts">
                        sHOP tSHUTs
                    </Link>
                </div>
                <div class="container mx-4  px-8 sm:px-0">
                    <div class="container mx-auto">
                        <div class="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-4 gap-6">
                            {carts.map((cart) => {
                                return (
                                    // <div class="w-full  h-full  p-4   duration-500">
                                    //     <a class="relative block  overflow-hidden rounded  ">
                                    //         <img
                                    //             alt="ecommerce"
                                    //             class="block h-full w-full object-cover object-center cursor-pointer"
                                    //             src={cart.img}
                                    //         />
                                    //     </a>
                                    //     <div class="mt-4 ">
                                    //         <div class="flex flex-row justify-between">
                                    //             <h3 class="title-font mb-1 text-xs tracking-widest text-white">
                                    //                 {cart.name}
                                    //             </h3>
                                    //             <h2 class="title-font  text-lg font-medium text-white">
                                    //                 KES {cart.price}
                                    //             </h2>
                                    //         </div>

                                    //         <h2 class="title-font text-xs font-medium text-white">
                                    //             {cart.color}
                                    //         </h2>
                                    //         <h2 class="title-font text-md text-end font-medium text-white">
                                    //             {cart.description}
                                    //         </h2>
                                    //         <div class="flex flex-row justify-between">
                                    //             <p class="mt-1 text-white font-light text-xs">
                                    //                 Available Sizes:
                                    //             </p>
                                    //             <p class="mt-0 text-white text-sm ">
                                    //                 XXL XL L M S
                                    //             </p>
                                    //         </div>
                                    //         <Link
                                    //             tabIndex="1"
                                    //             className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                    //             href={route(
                                    //                 "cart.edit",
                                    //                 cart.id
                                    //             )}
                                    //         >
                                    //             Edit
                                    //         </Link>
                                    //         <button
                                    //             onClick={destruct}
                                    //             id={cart.id}
                                    //             type="button"
                                    //             className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                    //         >
                                    //             Delete
                                    //         </button>
                                    //     </div>
                                    // </div>
                                    <div class="flex justify-center">
                                        <div class="flex flex-col rounded-lg   shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                            <img
                                                class="h-48 w-full rounded-t-lg object-cover md:h-auto md:w-36 md:rounded-none md:rounded-l-lg"
                                                src={cart.img}
                                                alt={cart.name}
                                            />
                                            <div class="flex flex-col justify-start mx-10  ">
                                                <div class="flex flex-row justify-start ">
                                                    <h5 class=" mx-2 text-md  text-neutral-600 dark:text-neutral-50">
                                                        Name:
                                                    </h5>
                                                    <h5 class="  text-md   text-white dark:text-neutral-50">
                                                        {cart.name}
                                                    </h5>
                                                </div>
                                                <div class="flex flex-row justify-start ">
                                                    <h5 class="mx-2  text-md  text-neutral-600 dark:text-neutral-50">
                                                        Color:
                                                    </h5>
                                                    <h5 class="  text-md   text-white dark:text-neutral-50">
                                                        {cart.color}
                                                    </h5>
                                                </div>
                                                <div class="flex flex-row justify-start  ">
                                                    <h5 class="mx-2  text-md  text-neutral-600 dark:text-neutral-50">
                                                        Description:
                                                    </h5>
                                                    <h5 class="  text-md   text-white dark:text-neutral-50">
                                                        {cart.description}
                                                    </h5>
                                                </div>
                                                <div class="flex flex-row justify-start  ">
                                                    <h5 class="mx-2 text-md  text-neutral-600 dark:text-neutral-50">
                                                        Size:
                                                    </h5>
                                                    <h5 class="  text-md   text-white dark:text-neutral-50">
                                                        {cart.size}
                                                    </h5>
                                                </div>
                                                <div class="flex flex-row justify-start  ">
                                                    <MinusCircleIcon class='text-white h-6 w-6 mx-2'/>

                                                    <input
                                                        type="number"
                                                        placeholder="Quantity"
                                                        class="text-xs p-1 mx-2 mb-1"
                                                    />
                                                    <PlusCircleIcon class='text-white h-6 w-6 mx-2'/>
                                                </div>
                                                <button
                                                    type="button"
                                                    class="text-white text-md bg-red-600 p-1 rounded text-xs my-1"
                                                >
                                                    rEMOVE fROM cART
                                                </button>
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
