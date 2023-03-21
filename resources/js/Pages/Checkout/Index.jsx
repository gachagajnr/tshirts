import { useState } from "react";
import { usePage, Head, Link, useForm, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Index(props) {
    const { carts } = usePage().props;
    const [currentRadioValue, setCurrentRadioValue] = useState();
    const handleRadioChange = (e) => {
        setCurrentRadioValue(e.target.value);
     };
     const { data, setData, post, errors, progress, processing, transform } =
        useForm({
            name: "",
            description: "",
            price: "",
            color: "",
            size: "",
            img: null,
            quantity: "",
        });

    function submit(e) {
        e.preventDefault();
        transform((data) => ({
            ...data,
            quantity: data.quantity ? " " : "1",
        }));
        post("/tshirts", data);
    }
    function destruct(e) {
        if (confirm("Are you sure you want to delete this tshirt?")) {
            e.preventDefault();
            router.delete(route("cart.destroy", e.currentTarget.id));
        }
    }

    return (
        <Layout>
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
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {carts.map((cart) => {
                return (
                    <div
                        key={cart.id}
                        class="flex flex-row flex-wrap gap-3 p-3  justify-center   sm:flex-col   md:flex-row"
                    >
                        <img
                            class="h-full w-full  object-fit md:h-auto md:w-36  "
                            src={cart.img}
                            alt={cart.name}
                        />
                        <div class="flex flex-col justify-start  p-3 ">
                            <div class="flex flex-row justify-between  ">
                                <h5 class="  text-xl   text-white ">
                                    {cart.name}
                                </h5>
                                <h5 class="  font-mono text-white ">
                                  Color :  {cart.color.toLowerCase()}
                                </h5>
                            </div>

                            <div class="flex flex-row  justify-start border-b-2 py-1">
                                <h5 class="mx-2 text-sm  text-neutral-300 ">
                                    Selected Size:
                                </h5>
                                <h5 class="  text-md   text-white  ">
                                    {cart.size}
                                </h5>
                            </div>

                            <div class="flex flex-row  flex-wrap  my-3">
                                <h5 class="mx-2 text-sm  text-neutral-300 ">
                                    iTEMS:
                                </h5>
                                <h5 class="  text-sm   text-white  ">
                                    {cart.quantity}
                                </h5>
                                <h5 class="mx-2 text-sm  text-neutral-300  ">
                                    @
                                </h5>
                                <h5 class="  text-sm   text-white ">
                                    {cart.price}
                                </h5>
                            </div>
                            <div class='flex flex-row'>
                            <h5 class="mx-2 text-sm  text-neutral-300 ">
                                tOTAL:
                            </h5>
                            <h5 class="  text-md   text-lime-600 ">
                                {cart.price * cart.quantity}
                            </h5>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div class="flex flex-row justify-between">
                
                <Link
                    as="button"
                    href="/checkout"
                    class="text-white text-center p-3 m-2 border hover:border- hover:-translate-y-2 duration-300  w-1/2 rounded-lg justify-center "
                >
                      place order & pay
                </Link>
            </div>
        </Layout>
    );
}
