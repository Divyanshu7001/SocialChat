import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <nav className="container mx-auto flex justify-between">
                <ul className="flex">
                    <li className="mr-6">
                        <a href="#" className="text-lg">
                            Home
                        </a>
                    </li>
                    <li className="mr-6">
                        <a href="#" className="text-lg">
                            Features
                        </a>
                    </li>
                    <li className="mr-6">
                        <a href="#" className="text-lg">
                            Pricing
                        </a>
                    </li>
                </ul>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </button>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </nav>
        </header>
    );
};

export default Header;
