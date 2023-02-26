import { usePage, Head, Link, useForm, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function Index(props) {
    const { carts } = usePage().props;

    // console.log(carts);
    function destruct(e) {
        if (confirm("Are you sure you want to delete this tshirt?")) {
            // console.log(e.currentTarget.id);
            e.preventDefault();
            router.delete(route("cart.destroy", e.currentTarget.id));
        }
    }

    return (
        <Layout>
            <Head title="tSHUT wRLD" />
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
                        <div class="flex flex-row p-2 justify-center my-3">
                            <div class="text-slate-400 text-md text-center font-extralight mx-2">
                                tOTAL tSHUTs
                            </div>
                            <div class="text-white text-2xl text-center font-extralight">
                                {carts
                                    .map((item) => item.quantity)
                                    .reduce((prev, next) => prev + next, 0)
                                    .toString()
                                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ",")}
                            </div>
                            <div class="text-slate-400 text-md text-center font-extralight mx-2">
                                tOTAL aMOUNT
                            </div>
                            <div class="text-white text-2xl text-center font-extralight">
                                {carts
                                    .map((item) => item.price)
                                    .reduce((prev, next) => prev + next, 0)
                                    .toString()
                                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ",")}
                            </div>
                        </div>
                        <div class="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-4 gap-6">
                            {carts.map((cart) => {
                                return (
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
                                                    <h5 class="mx-2 text-md  text-neutral-600 dark:text-neutral-50">
                                                        Quantity:
                                                    </h5>
                                                    <h5 class="  text-md   text-white dark:text-neutral-50">
                                                        {cart.quantity}
                                                    </h5>
                                                </div>
                                                <div class="flex flex-row justify-between  ">
                                                    <h5 class="mx-2 text-sm  text-neutral-600 dark:text-neutral-50">
                                                        KES:
                                                    </h5>
                                                    <h5 class="  text-lg   text-white dark:text-neutral-50">
                                                        {cart.price}
                                                    </h5>
                                                </div>
                                                <div class="flex flex-row justify-between  ">
                                                    <button
                                                        onClick={() =>
                                                            router.put(
                                                                route(
                                                                    "cart.update",
                                                                    cart.id
                                                                ),
                                                                {
                                                                    quantity:
                                                                        cart.quantity -
                                                                        1,
                                                                }
                                                            )
                                                        }
                                                        type="submit"
                                                    >
                                                        <MinusIcon class="text-white h-6 w-6 mx-2 hover:text-green-500" />
                                                    </button>
                                                    <div class="text-white text-2xl">
                                                        {cart.quantity}
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            router.put(
                                                                route(
                                                                    "cart.update",
                                                                    cart.id
                                                                ),
                                                                {
                                                                    quantity:
                                                                        cart.quantity +
                                                                        1,
                                                                }
                                                            )
                                                        }
                                                        type="submit"
                                                    >
                                                        <PlusIcon class="text-white h-6 w-6 mx-2 hover:text-red-600" />
                                                    </button>
                                                </div>
                                                <button
                                                    as="button"
                                                    id={cart.id}
                                                    onClick={() =>
                                                        router.delete(
                                                            route(
                                                                "cart.destroy",
                                                                cart.id
                                                            )
                                                        )
                                                    }
                                                    class="cursor-pointer text-white text-center text-md bg-red-600 p-1 rounded text-xs my-1"
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
