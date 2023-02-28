import { usePage, Head, Link, useForm, router } from "@inertiajs/react";
import { useState } from "react";
import Layout from "@/Layouts/Layout";

export default function Show(props) {
    const [cart, setCart] = useState({});

    const { data, setData, router, post, errors, progress } = useForm({
        name: "",
        description: "",
        price: "",
        color: "",
        size: "",
        img: "",
    });
    const { tshirts } = usePage().props;

    function destruct(e) {
        if (confirm("Are you sure you want to delete this tshirt?")) {
            router.delete(route("tshirts.destroy", e.currentTarget.id));
        }
    }
    const clickMe = (tshirt) => () => {
        setCart(tshirt);
        setData({
            name: tshirt.name,
            description: tshirt.description,
            price: tshirt.price,
            color: tshirt.color,
            img: tshirt.img,
            size: tshirt.size,
            quantity: tshirt.quantity,
            total: tshirt.quantity * tshirt.price,
        });
    };

    function submit(e) {
        e.preventDefault();
        console.log(data);
        post("/cart", data);
    }

    return (
        <Layout>
            <Head title="tSHUT wRLD" />
            <div class="text-white text-4xl text-center p-5 border-t m-2 hover:-translate-y-2 duration-500">
                sHUT dESIGNs
            </div>

            <div class="md:container md:mx-auto px-4   ">
                <div class="text-red-500 text-end hover:-translate-x-2 duration-500 my-3">
                    <Link as="button" href="/tshirts/create">
                        cREATE tSHUT
                    </Link>
                </div>

                <div
                    class="invisible fixed bottom-0 top-0 right-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
                    tabindex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                    data-te-offcanvas-init
                >
                    <div class="flex items-center justify-between p-4">
                        <button
                            type="button"
                            class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            data-te-offcanvas-dismiss
                        >
                            <span class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div class="offcanvas-body flex-grow overflow-y-auto p-4">
                        <div class="flex flex-row justify-center">
                            <div class="w-full  h-full  p-6 ">
                                <form onSubmit={submit}>
                                    <img
                                        alt="ecommerce"
                                        class="block h-auto w-full object-cover object-center cursor-pointer"
                                        src={cart.img}
                                    />
                                    <div class="mt-2 ">
                                        <div class="flex flex-row justify-between">
                                            <div class="text-center text-md">
                                                {cart.name}
                                            </div>

                                            <h2 class="title-font  text-md font-medium text-black">
                                                KES {cart.price}
                                            </h2>
                                        </div>

                                        <h2 class="title-font text-xs font-medium text-black">
                                            {cart.color}
                                        </h2>
                                        <h2 class="title-font text-xs text-end font-medium text-black">
                                            {cart.description}
                                        </h2>
                                        <div class="flex flex-row justify-between">
                                            <p class="mt-0 text-black font-light text-xs">
                                                Available Sizes:
                                            </p>
                                            <p class="mt-0 text-black text-xs ">
                                                {cart.size}
                                            </p>
                                        </div>

                                        <button
                                            type="submit"
                                            class="p-2 w-full bg-slate-500"
                                        >
                                            sAVE tO cART
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mx-4  px-8 sm:px-0">
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {tshirts.map((tshirt) => {
                                return (
                                    <div
                                        class="w-full  h-full   "
                                        onClick={clickMe(tshirt)}
                                        type="button"
                                        data-te-offcanvas-toggle
                                        data-te-target="#offcanvasRight"
                                        aria-controls="offcanvasRight"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            alt="ecommerce"
                                            class="block h-96 w-full object-fit object-center cursor-pointer"
                                            src={tshirt.img}
                                        />
                                        <div class="mt-4 ">
                                            <div class="flex flex-row justify-between">
                                                <h3 class="title-font mb-1 text-xs tracking-widest text-white">
                                                    {tshirt.name}
                                                </h3>
                                                <h2 class="title-font  text-md font-medium text-white">
                                                    KES {tshirt.price}
                                                </h2>
                                            </div>

                                            <h2 class="title-font text-xs font-medium text-white">
                                                {tshirt.color}
                                            </h2>
                                            <h2 class="title-font text-xs text-end font-medium text-white">
                                                {tshirt.description}
                                            </h2>
                                            <div class="flex flex-row justify-between">
                                                <p class="mt-0 text-white font-light text-xs">
                                                    Available Sizes:
                                                </p>
                                                <p class="mt-0 text-white text-xs ">
                                                    XXL XL L M S
                                                </p>
                                            </div>

                                            {/* <Link
                                                tabIndex="1"
                                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                href={route(
                                                    "tshirts.edit",
                                                    tshirt.id
                                                )}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={destruct}
                                                id={tshirt.id}
                                                type="button"
                                                className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                            >
                                                Delete
                                            </button> */}
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
