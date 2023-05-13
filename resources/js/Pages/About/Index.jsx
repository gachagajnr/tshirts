import { usePage, Head, Link, useForm, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Index(props) {
    return (
        <Layout>
            <Head title="About" />

            <div class="text-black text-4xl text-center p-5   m-2 hover:-translate-y-2 duration-500">
                About CraftyTshirtsStore
            </div>

            <div class="md:container md:mx-auto px-4   ">
                <div class="flex flex-row justify-center flex-wrap">
                    <div class=" text-4xl tracking-tight text-center font-normal p-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-lime-600">
                        T-Shirts
                    </div>
                    <div class=" text-4xl tracking-tight text-center font-normal p-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-lime-600">
                        Custom T-Shirts
                    </div>
                    <div class=" text-4xl tracking-tight text-center font-normal p-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-lime-600">
                        Word T-Shirts
                    </div>
                </div>
                <div class=" text-5xl text-center tracking-wide font-thin p-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
                    ~ Branding ~
                </div>
            </div>
        </Layout>
    );
}
