import React from "react";

const FeatureShowcase = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4">Onboard Clients</h2>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Copy Link
                </button>
                <h2 className="text-3xl font-bold mb-4">Active Chats</h2>
                <ul className="list-none mb-8">
                    <li className="mb-2">Chat 1</li>
                    <li className="mb-2">Chat 2</li>
                    <li className="mb-2">Chat 3</li>
                </ul>
                <h2 className="text-3xl font-bold mb-4">Chat Window</h2>
                <div className="bg-gray-100 p-4 rounded">
                    <p className="text-lg mb-2">Chat message 1</p>
                    <p className="text-lg mb-2">Chat message 2</p>
                    <p className="text-lg mb-2">Chat message 3</p>
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;
