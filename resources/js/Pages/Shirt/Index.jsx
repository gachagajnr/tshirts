import { usePage, Head, Link, useForm, router } from "@inertiajs/react";

import Layout from "@/Layouts/Layout";

export default function Index(props) {
    const { tshirts } = usePage().props;

   
    console.log(tshirts)
    return (
        <Layout>
            <Head title="Tshuts" />
            <div class="text-white text-4xl text-center p-5 border-t m-2 hover:-translate-y-2 duration-500">
                sHUT dESIGNs
            </div>
 
        </Layout>
    );
}
