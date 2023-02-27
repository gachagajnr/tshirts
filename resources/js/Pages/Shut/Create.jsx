import { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Link, usePage, useForm, Head } from "@inertiajs/react";

export default function Create() {
    const {flash} = usePage().props;
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
        post("/shuts", data);
    }

    return (
        <Layout>
            <Head title="tSHUT wRLD" />

            <div class="md:container md:mx-auto px-4   ">
                <div class="container flex   mx-auto justify-center p-5">
                    <div class="flex flex-row flex-wrap gap-3 justify-center">
                        <div class="text-white  text-center p-5 border-t m-2  ">
                            <div class="text-white mx-2 text-center p-3 hover:text-red-500 hover:-translate-x-1 duration-500">
                                <Link href="/shuts">sHUTs</Link>
                            </div>
                            <div class="text-white text-4xl text-center p-5 border-t m-2 hover:-translate-x-2 duration-500">
                                <br /> cREATE
                                <br /> sHUT <br />
                                wORD
                            </div>
                        </div>
                        {flash.message && (
                            <div class="alert">{flash.message}</div>
                        )}
                        <div class="max-w-2xl p-8  rounded shadow      bg-slate-400">
                            <form onSubmit={submit}>
                                <div class="flex flex-col">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        id="name"
                                        value={data.name}
                                        placeholder="Name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        class="border border-white p-1 m-2 rounded"
                                    />
                                    {errors.name && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.name}
                                        </div>
                                    )}
                                    
                                   
                                     
                                    <button
                                        disabled={processing}
                                        type="submit"
                                        class="  bg-blue-600 w-30 hover:bg-green-600 text-white, p-2 my-3 rounded"
                                    >
                                        sAVE sHUT
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
