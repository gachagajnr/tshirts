import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200">
                    mY tSHUT wRLD
                </h2>
            }
        >
            <Head title="tSHUT wRLD" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            My Orders
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="mb-8 text-3xl font-bold">
                <Link
                    href={route("tshirts.index")}
                    className="text-indigo-600 hover:text-indigo-700"
                >
                    Tshirts
                </Link>
                <span className="font-medium text-indigo-600">/</span>
                Create
            </h1>
        </AuthenticatedLayout>
    );
}
