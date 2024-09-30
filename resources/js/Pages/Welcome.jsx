import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="SocialChat Home" />
            <header className=" mx-10 px-4 py-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-orange-500">
                    SocialChat
                </h1>
                <nav>
                    <ul className="flex space-x-6">
                        {props.auth.user ? (
                            <li>
                                <a
                                    href={"chat"}
                                    className="hover:text-orange-500"
                                >
                                    Chat
                                </a>
                            </li>
                        ) : (
                            <></>
                        )}

                        <li>
                            <a href="#" className="hover:text-orange-500">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex space-x-4">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </header>

            <section className="mx-10 xl:pt-6 px-4 grid grid-cols-1 xl:grid-cols-2 gap-8 items-center ">
                <div className="flex flex-wrap">
                    <div>
                        <h2 className="text-4xl font-bold leading-tight">
                            Start chatting with Friends & Relatives, anytime,
                            anywhere with SocialChat
                        </h2>
                        <p className="text-gray-600 mt-4 mb-8">
                            Great software that allows you to chat from any
                            place at any time without any interruption.
                        </p>
                        <Link
                            href={"chat"}
                            className="bg-orange-500 text-white px-6 py-3 rounded-full mt-8 hover:bg-orange-600"
                        >
                            Start Chatting Now →
                        </Link>
                    </div>
                    <div className="flex mb-4 md:mb-0 mt-8 lg:mt-0 pt-16">
                        <div className="flex flex-row items-center ">
                            <img
                                src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI-400x400.jpg"
                                alt="Happy Customer 1"
                                className="w-16 h-16 rounded-full mb-2 "
                            />
                            <img
                                src="https://img.freepik.com/free-photo/cheerful-man-looking-camera_23-2147800015.jpg?t=st=1727648574~exp=1727652174~hmac=5670ac8c0dac036bac521892c2a620017b41c2532ecd71b5610bbf9e85119f7e&w=740"
                                alt="Happy Customer 1"
                                className="w-16 h-16 rounded-full mb-2 -ml-5"
                            />
                            <img
                                src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*Ggt-XwliwAO6QURi.jpg"
                                alt="Happy Customer 1"
                                className="w-16 h-16 rounded-full mb-2 -ml-5"
                            />
                            <img
                                src="https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture-400x400.jpg"
                                alt="Happy Customer 1"
                                className="w-16 h-16 rounded-full mb-2 -ml-5"
                            />
                        </div>
                        <div className="">
                            <p className="text-3xl font-bold">2,291</p>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://cdn.prod.website-files.com/62f3823fbb866a3f5d62e15d/62fc01b0439c68415ee6d946_hero.png"
                        alt="Woman smiling"
                        className="rounded-lg w-full h-auto"
                    />
                    <div className="absolute top-20 right-0 bg-white p-4 rounded-lg shadow-lg w-64 transform -rotate-12">
                        <div className="flex items-center mb-2">
                            <img
                                src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI-400x400.jpg"
                                alt="Jenny Wilson"
                                className="w-10 h-10 rounded-full mr-2"
                            />
                            <span className="font-bold">John Wilson</span>
                        </div>
                        <p className="text-sm">
                            I commented on Figma, I want to add some fancy
                            icons. Do you have any icon set?
                        </p>
                    </div>
                    <div className="absolute bottom-20 bg-white p-4 rounded-lg shadow-lg w-64 transform rotate-12">
                        <div className="flex items-center mb-2">
                            <img
                                src="https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture-400x400.jpg"
                                alt="Jenny Wilson"
                                className="w-10 h-10 rounded-full mr-2"
                            />
                            <span className="font-bold">Jenny Wilson</span>
                        </div>
                        <p className="text-sm">
                            I commented on Figma, I want to add some fancy
                            icons. Do you have any icon set?
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
