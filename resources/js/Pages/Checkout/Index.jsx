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
            firstname: "",
            lastname: "",
            phone: "",
            street: "",
            location: "",
            city: "",
        });

    function submit(e) {
        e.preventDefault();
        transform((data) => ({
            ...data,
            quantity: data.quantity ? " " : "1",
        }));
        // post("/tshirts", data);
    }
    function destruct(e) {
        if (confirm("Are you sure you want to delete this tshirt?")) {
            e.preventDefault();
            router.delete(route("cart.destroy", e.currentTarget.id));
        }
    }

    return (
        <Layout>
            <Head title="Checkout"/>
            <div class="text-black text-4xl text-center p-5   m-2 hover:-translate-y-2 duration-500">
                Checkout
            </div>

            <div class="md:container md:mx-auto px-4   ">
                
                <div class="container mx-4  px-8 sm:px-0">
                    <div class="container mx-auto">
                        <div class="flex flex-row p-2 gap-3 justify-center my-3 flex-wrap">
                            <div class="text-black text-lg text-center font-semibold mx-2">
                                Total Tshirts
                            </div>
                            <div class="text-black text-2xl text-center font-semibold">
                                {carts
                                    .map((item) => item.quantity)
                                    .reduce((prev, next) => prev + next, 0)
                                    .toString()
                                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1")}
                            </div>
                            <div class="text-black text-lg text-center font-extralight mx-2">
                                Total Amount
                            </div>
                            <div class="text-black text-2xl text-center font-semibold">
                                {carts
                                    .map((item) => item.total)
                                    .reduce((prev, next) => prev + next, 0)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row flex-wrap-reverse justify-center">
                <div class="p-0 xs:p-4">
                    <div class="text-2xl text-black font-semibold py-0 xs:p-4">
                        Delivery Information
                    </div>

                    <form onSubmit={submit}>
                        <div class="flex flex-col ">
                            <div class="flex flex-row">
                                <div class="flex flex-col   ">
                                    <label
                                        htmlFor="firstname"
                                        class="text-black"
                                    >
                                        First Name:
                                    </label>
                                    <input
                                        id="firstname"
                                        value={data.firstname}
                                        placeholder="First Name"
                                        onChange={(e) =>
                                            setData("firstname", e.target.value)
                                        }
                                        class="border border-white p-1 m-2 rounded"
                                    />
                                    {errors.firstname && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.firstname}
                                        </div>
                                    )}
                                </div>
                                <div class="flex flex-col  ">
                                    <label
                                        htmlFor="lastname"
                                        class="text-black"
                                    >
                                        Last Name:
                                    </label>
                                    <input
                                        id="lastname"
                                        value={data.lastname}
                                        placeholder="Last Name"
                                        onChange={(e) =>
                                            setData("lastname", e.target.value)
                                        }
                                        class="border border-white p-1 m-2 rounded"
                                    />
                                    {errors.lastname && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.lastname}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <label htmlFor="phone" class="text-black">
                                Phone Number:
                            </label>
                            <input
                                id="phone"
                                value={data.phone}
                                placeholder="+254712345678"
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                class="border border-white p-1 m-2 rounded"
                            />
                            {errors.phone && (
                                <div class="text-red-600 text-end text-xs">
                                    {errors.phone}
                                </div>
                            )}
                            <label htmlFor="location" class="text-black">
                                Delivery Location:
                            </label>
                            <input
                                id="location"
                                value={data.location}
                                placeholder="Name"
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                                class="border border-white p-1 m-2 rounded"
                            />
                            {errors.location && (
                                <div class="text-red-600 text-end text-xs">
                                    {errors.location}
                                </div>
                            )}
                            <h5 class="text-red-400 font-light">
                                Free Delivery in CDB
                            </h5>
                            <div class="flex flex-row">
                                <div class="flex flex-col  ">
                                    <label htmlFor="street" class="text-black">
                                        Street:
                                    </label>
                                    <input
                                        id="street"
                                        value={data.street}
                                        placeholder="Street Name"
                                        onChange={(e) =>
                                            setData("street", e.target.value)
                                        }
                                        class="border border-white p-1 m-2 rounded"
                                    />
                                    {errors.street && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.street}
                                        </div>
                                    )}
                                </div>
                                <div class="flex flex-col  ">
                                    <label htmlFor="city" class="text-black">
                                        City:
                                    </label>
                                    <input
                                        id="city"
                                        value={data.city}
                                        placeholder="City/Town"
                                        onChange={(e) =>
                                            setData("city", e.target.value)
                                        }
                                        class="border border-white p-1 m-2 rounded"
                                    />
                                    {errors.city && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.city}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                disabled={processing}
                                type="submit"
                                class="  bg-blue-600 w-30 hover:bg-green-600 text-black, p-2 my-3 rounded"
                            >
                                Place Order & Pay
                            </button>
                        </div>
                    </form>
                </div>
                <div class="flex flex-col justify-start">
                    <div class="text-red-500 text-center rounded-md hover:-translate-x-2 border border-red-600 duration-500 my-3">
                        <Link as="button" href="/cart">
                            Edit Cart
                        </Link>
                    </div>

                    <div class="overflow-y-scroll h-48">
                        {carts.map((cart) => {
                            return (
                                <div
                                    key={cart.id}
                                    class="flex flex-row   gap-3 p-3  justify-center "
                                >
                                    <img
                                        class="h-48 w-auto  object-fit md:h-auto md:w-36  "
                                        src={cart.img}
                                        alt={cart.name}
                                    />
                                    <div class="flex flex-col justify-start  p-3 ">
                                        <h5 class="  text-xs   text-black ">
                                            Name: {cart.name}
                                        </h5>
                                        <h5 class=" text-xs font-mono text-black ">
                                            Color: {cart.color.toLowerCase()}
                                        </h5>

                                        <div class="flex flex-row  justify-start border-b-2  ">
                                            <h5 class="  text-xs   text-black font-bold ">
                                                Size: {cart.size}
                                            </h5>
                                        </div>

                                        <div class="flex flex-row  flex-wrap  my-2">
                                            <h5 class="  text-sm   text-black  ">
                                                {cart.quantity} @ {cart.price}
                                            </h5>
                                        </div>
                                        <div class="flex flex-row">
                                            <h5 class="  text-md   text-red-600 ">
                                                Total:{" "}
                                                {cart.price * cart.quantity}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div class="text-2xl text-black font-semibold py-0 xs:p-4">
                        Summary
                    </div>
                    <div class="flex flex-row p-2 gap-3 justify-center my-3 flex-wrap">
                        <div class="text-black text-lg text-center font-semibold mx-2">
                            Total Tshirts
                        </div>
                        <div class="text-black text-2xl text-center font-semibold">
                            {carts
                                .map((item) => item.quantity)
                                .reduce((prev, next) => prev + next, 0)
                                .toString()
                                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1")}
                        </div>
                        <div class="text-black text-lg text-center font-extralight mx-2">
                            Total Amount
                        </div>
                        <div class="text-black text-2xl text-center font-semibold">
                            {carts
                                .map((item) => item.total)
                                .reduce((prev, next) => prev + next, 0)}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
