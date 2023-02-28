import { usePage, Head, Link, useForm, router } from "@inertiajs/react";
import { useState } from "react";
import Layout from "@/Layouts/Layout";

export default function Show(props) {
    const [cart, setCart] = useState({});

    const { data, setData, router, post, processing, errors, progress } =
        useForm({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            question: "",
        });

    function submit(e) {
        e.preventDefault();
        post("/contact", data);
    }

    return (
        <Layout>
            <Head title="tSHUT wRLD" />
            <div class="text-white text-4xl text-center p-5   m-2 hover:-translate-y-2 duration-500">
                cONTACT uS
            </div>

            <div class="container mx-4  px-8 sm:px-0">
                <div class="container mx-auto w-auto">
                    <div class="flex flex-row flex-wrap justify-center">
                        <div class="tracking-wide text-center font-light text-3xl mb-3 hover:-translate-x-1 duration-150  leading-tight text-slate-200 p-5 ">
                            aRE you in need of a cUSTOM solution?
                            <br /> ~sAY~
                            <br />
                            <div class="p-2 text-3xl">
                                cUSTOM t-shirt, mASS t-SHIRT branding solutions,
                                other branding sERVICES or any qUESTIONS ?
                            </div>
                            rEACH oUT to us to see where we can hELP,
                            <br /> we'll rESPOND <br />
                            as soon as we get your qUESTION.
                        </div>

                        <div class=" p-10   border-l-2 border-t-2 border-green-300 ">
                            <form onSubmit={submit}>
                                <div class="flex flex-col  ">
                                    <div class="text-white text-center p-4 m-2 text-3xl">
                                        rEACH oUT nOW
                                    </div>
                                    <div class="flex flex-row">
                                        <div class="flex flex-col">
                                            <label
                                                htmlFor="firstname"
                                                class="text-white"
                                            >
                                                First Name:
                                            </label>
                                            <input
                                                id="firstname"
                                                value={data.firstname}
                                                placeholder="First Name"
                                                onChange={(e) =>
                                                    setData(
                                                        "firstname",
                                                        e.target.value
                                                    )
                                                }
                                                class="border border-white p-1 m-2 rounded"
                                            />
                                            {errors.firstname && (
                                                <div class="text-red-600 text-end text-xs">
                                                    {errors.firstname}
                                                </div>
                                            )}
                                        </div>
                                        <div class="flex flex-col">
                                            <label
                                                htmlFor="lastname"
                                                class="text-white"
                                            >
                                                Last Name:
                                            </label>
                                            <input
                                                id="lastname"
                                                type="text"
                                                value={data.lastname}
                                                placeholder="Last Name"
                                                onChange={(e) =>
                                                    setData(
                                                        "lastname",
                                                        e.target.value
                                                    )
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
                                    <label htmlFor="email" class="text-white">
                                        Email Address:
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        placeholder="Email Address"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        class="border border-white p-1 m-2 rounded"
                                    />

                                    {errors.email && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.email}
                                        </div>
                                    )}

                                    <label htmlFor="phone" class="text-white">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="number"
                                        value={data.phone}
                                        placeholder="Phone Number"
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        class="border border-white p-1 m-1 rounded"
                                    />
                                    {errors.phone && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.phone}
                                        </div>
                                    )}

                                    <label htmlFor="query" class="text-white">
                                        Question
                                    </label>
                                    <input
                                        id="question"
                                        value={data.question}
                                        placeholder="Question"
                                        onChange={(e) =>
                                            setData("question", e.target.value)
                                        }
                                        class="border border-white p-1 m-1 rounded "
                                    />
                                    {errors.question && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.question}
                                        </div>
                                    )}

                                    <button
                                        disabled={processing}
                                        type="submit"
                                        class="  bg-blue-600 hover:bg-green-600 text-white p-2 my-3 rounded"
                                    >
                                        sUBMIT qUESTION
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
