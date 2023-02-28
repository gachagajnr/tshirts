import { usePage, Head, Link, useForm, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Index(props) {
    return (
        <Layout>
            <Head title="tSHUT wRLD" />
            <div class="text-white text-4xl text-center p-5   m-2 hover:-translate-y-2 duration-500">
                aBOUT tSHUT wRLD
            </div>

            <div class="md:container md:mx-auto px-4   ">
                <div class='flex flex-row justify-center flex-wrap'>
                <div class=" text-4xl tracking-tight text-center font-extralight p-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-100 to-lime-600">
                    tSHIRTs 
                </div>
                <div class=" text-4xl tracking-tight text-center font-extralight p-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-100 to-lime-600">
                    cUSTOM tSHIRTs 
                </div>
                <div class=" text-4xl tracking-tight text-center font-extralight p-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-100 to-lime-600">
                    wORD tSHIRTs
                </div>
                </div>
                <div class=" text-5xl text-center tracking-wide font-thin p-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
                    ~ bRAnDINg ~
                </div>
            </div>
        </Layout>
    );
}
