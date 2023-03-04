import { usePage, Head, Link, useForm, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Index(props) {
    const { carts } = usePage().props;

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
            <div class="text-white text-4xl text-center p-5   m-2 hover:-translate-y-2 duration-500">
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
                        <div class="flex flex-row p-2 gap-3 justify-center my-3 flex-wrap">
                            <div class="text-slate-400 text-lg text-center font-extralight mx-2">
                                tOTAL tSHUTs
                            </div>
                            <div class="text-white text-2xl text-center font-extralight">
                                {carts
                                    .map((item) => item.quantity)
                                    .reduce((prev, next) => prev + next, 0)
                                    .toString()
                                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1")}
                            </div>
                            <div class="text-slate-400 text-lg text-center font-extralight mx-2">
                                tOTAL aMOUNT
                            </div>
                            <div class="text-white text-2xl text-center font-extralight">
                                {
                                    carts
                                        .map((item) => item.total)
                                        .reduce((prev, next) => prev + next, 0)
                                    // .toString()
                                    // .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ",")
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" ">
                {carts.map((cart) => {
                    return (
                        <div class="flex flex-row flex-wrap gap-3 p-3  justify-center   sm:flex-col   md:flex-row">
                            <img
                                class="h-full w-full  object-fit md:h-auto md:w-36  "
                                src={cart.img}
                                alt={cart.name}
                            />
                            <div class="flex flex-col justify-start  p-3 ">
                                <div class="flex flex-row justify-between  ">
                                    <h5 class="  text-xl   text-white dark:text-neutral-50">
                                        {cart.name}
                                    </h5>
                                    <h5 class="  font-mono text-white dark:text-neutral-50">
                                        {cart.color.toLowerCase()}
                                    </h5>
                                </div>

                                <div class="flex flex-row   ">
                                    <h5 class="mx-2 text-md  text-neutral-600 dark:text-neutral-50">
                                        sIZE:
                                    </h5>
                                    <h5 class="  text-md   text-white dark:text-neutral-50">
                                        {cart.size}
                                    </h5>
                                </div>
                                {/* <div class="flex flex-row">
                                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="radioDefault01"
                                        />
                                        <label
                                            class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-white"
                                            for="radioDefault01"
                                        >
                                            M
                                        </label>
                                    </div>
                                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="radioDefault01"
                                        />
                                        <label
                                            class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-white"
                                            for="radioDefault01"
                                        >
                                            M
                                        </label>
                                    </div>
                                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="radioDefault01"
                                        />
                                        <label
                                            class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-white"
                                            for="radioDefault01"
                                        >
                                            M
                                        </label>
                                    </div>
                                </div> */}
                                <div class="flex flex-row  flex-wrap  ">
                                    <h5 class="mx-2 text-md  text-neutral-600 dark:text-neutral-50">
                                        qUANTITY:
                                    </h5>
                                    <h5 class="  text-md   text-white dark:text-neutral-50">
                                        {cart.quantity}
                                    </h5>
                                    <h5 class="mx-2 text-sm  text-neutral-600 dark:text-neutral-50">
                                        pRICE:
                                    </h5>
                                    <h5 class="  text-sm   text-white dark:text-neutral-50">
                                        {cart.price}
                                    </h5>

                                    <h5 class="mx-2 text-sm  text-neutral-600 dark:text-neutral-50">
                                        tOTAL:
                                    </h5>
                                    <h5 class="  text-sm   text-lime-600 dark:text-neutral-50">
                                        {cart.price * cart.quantity}
                                    </h5>
                                    <div class="flex   p-1">
                                        <button
                                            disabled={cart.quantity <= 1}
                                            onClick={() =>
                                                router.put(
                                                    route(
                                                        "cart.update",
                                                        cart.id
                                                    ),
                                                    {
                                                        quantity:
                                                            cart.quantity - 1,
                                                        total: cart.total,
                                                        price: cart.price,
                                                    }
                                                )
                                            }
                                            type="submit"
                                        >
                                            <MinusCircleIcon class="cursor-pointer text-white h-6 w-6 mx-2 hover:text-red-500" />
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
                                                            cart.quantity + 1,
                                                        total: cart.total,
                                                        price: cart.price,
                                                    }
                                                )
                                            }
                                            type="submit"
                                        >
                                            <PlusCircleIcon class="text-white h-6 w-6 mx-2 hover:text-green-600" />
                                        </button>
                                    </div>
                                    <button
                                        as="button"
                                        id={cart.id}
                                        onClick={() =>
                                            router.delete(
                                                route("cart.destroy", cart.id)
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
        </Layout>
    );
}
