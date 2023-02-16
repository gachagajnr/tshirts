import { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Link, usePage, useForm, Head } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, progress } = useForm({
        name: "",
        description: "",
        price: "",
        color: "",
        size: "",
        img: null,
    });

    function submit(e) {
        e.preventDefault();
        post("/tshirts", data);
    }

    return (
        <Layout>
            <Head title="Tshuts" />

            <div class="md:container md:mx-auto px-4   ">
                <div class="container flex   mx-auto justify-center p-5">
                    

                    <div class="flex flex-row flex-wrap gap-3 justify-center">
                        <div class="text-white  text-center p-5 border-t m-2  ">
                            <div class="text-white mx-2 text-center p-3 hover:text-red-500 hover:-translate-x-1 duration-500">
                                <Link href="/tshirts">tSHUTs</Link>
                            </div>
                            <div class="text-white text-4xl text-center p-5 border-t m-2 hover:-translate-x-2 duration-500">
                                <br /> cREATE
                                <br /> tSHUT <br />
                                dESIGNs
                            </div>
                        </div>

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
                                    <label htmlFor="price">Price:</label>
                                    <input
                                        id="price"
                                        type="number"
                                        value={data.price}
                                        placeholder="Price"
                                        onChange={(e) =>
                                            setData("price", e.target.value)
                                        }
                                        class="border border-white p-1 m-2 rounded"
                                    />
                                    {errors.price && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.price}
                                        </div>
                                    )}

                                    <label htmlFor="color">Colors</label>
                                    <input
                                        id="color"
                                        value={data.color}
                                        placeholder="Color"
                                        onChange={(e) =>
                                            setData("color", e.target.value)
                                        }
                                        class="border border-white p-1 m-1 rounded"
                                    />
                                    {errors.color && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.color}
                                        </div>
                                    )}

                                    <label htmlFor="size">Sizes</label>
                                    <input
                                        id="size"
                                        value={data.size}
                                        placeholder="Sizes"
                                        onChange={(e) =>
                                            setData("size", e.target.value)
                                        }
                                        class="border border-white p-1 m-1 rounded"
                                    />
                                    {errors.size && (
                                        <div class="text-red-600 text-end text-xs">
                                            {errors.size}
                                        </div>
                                    )}

                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <input
                                        id="description"
                                        value={data.description}
                                        placeholder="Description"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        class="border border-white p-1 m-1 rounded"
                                    />
                                    {errors.description && (
                                        <div class="text-red-600 font-thin text-end text-xs">
                                            {errors.description}
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        onChange={(e) =>
                                            setData("img", e.target.files[0])
                                        }
                                    />
                                    {progress && (
                                        <progress
                                            value={progress.percentage}
                                            max="100"
                                        >
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                    <button
                                        type="submit"
                                        class="  bg-blue-600 w-30 hover:bg-green-600 text-white, p-2 my-3 rounded"
                                    >
                                        sAVE tSHUT
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
