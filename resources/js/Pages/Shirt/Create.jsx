import { useState } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, progress } = useForm({
        name: "",
        description: "",
        price: "",
        color: "",
        size: "",
        img: null,
    });
    // console.log(data);

    function submit(e) {
        e.preventDefault();
        post("/tshirts",data);
    }

    return (
        <div class="mt-10">
            <div class="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 class="mb-8 text-2xl  ">
                        <Link
                            href={route("tshirts.index")}
                            class="text-indigo-600 hover:text-indigo-700"
                        >
                            Tshirts
                        </Link>
                        <span class="font-medium text-indigo-600"> / </span>
                        Create
                    </h1>
                </div>
                <div class="max-w-2xl p-8  rounded shadow">
                    <form onSubmit={submit}>
                        <div class="flex flex-col">
                            <label htmlFor="name">Name:</label>
                            <input
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                class="border border-black p-1 m-2 rounded"
                            />
                            {errors.name && (
                                <div class="text-red-600 text-end">
                                    {errors.name}
                                </div>
                            )}
                            <label htmlFor="price">Price:</label>
                            <input
                                id="price"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                class="border border-black p-1 m-2 rounded"
                            />
                            {errors.price && (
                                <div class="text-red-600 text-end">
                                    {errors.price}
                                </div>
                            )}

                            <label htmlFor="color">Color:</label>
                            <input
                                id="color"
                                value={data.color}
                                onChange={(e) =>
                                    setData("color", e.target.value)
                                }
                                class="border border-black p-1 m-2 rounded"
                            />
                            {errors.color && (
                                <div class="text-red-600 text-end">
                                    {errors.color}
                                </div>
                            )}

                            <label htmlFor="size">Size:</label>
                            <input
                                id="size"
                                value={data.size}
                                onChange={(e) =>
                                    setData("size", e.target.value)
                                }
                                class="border border-black p-1 m-2 rounded"
                            />
                            {errors.size && (
                                <div class="text-red-600 text-end">
                                    {errors.size}
                                </div>
                            )}

                            <label htmlFor="description">Description:</label>
                            <input
                                id="description"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                class="border border-black p-1 m-2 rounded"
                            />
                            {errors.description && (
                                <div class="text-red-600 font-thin text-end">
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
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                            <button
                                type="submit"
                                class="border bg-blue-600 w-30 hover:bg-green-600 text-white, p-2 my-3 rounded"
                            >
                                Save Tshirt
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
