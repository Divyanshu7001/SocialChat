import React from "react";

const MessageInput = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-4 rounded border border-gray-300"
                />
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Send
                </button>
            </div>
        </section>
    );
};

export default MessageInput;
