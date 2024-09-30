import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    console.log(props);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                    Recommended Users
                </h2>
            }
        >
            <Head title="Chat Board" />

            <div className="w-4/5 m-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {props.recommended.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center"
                    >
                        <img
                            src="https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture-400x400.jpg" // Default profile picture
                            alt={`${user.name}'s profile`}
                            className="w-24 h-24 rounded-full mb-2"
                        />
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                        <p className="text-sm text-green-500">Active</p>{" "}
                        {/* All users are marked as active */}
                        <Link href={`chat/${user.id}`}>
                            <h3 className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Chat Now
                            </h3>
                        </Link>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
