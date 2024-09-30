import React from "react";

const HeroSection = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                    One Click. Zero Friction.
                </h1>
                <p className="text-lg mb-8">
                    ToryChat is an instant messaging tool for sales that helps
                    you connect with prospects and close deals faster.
                </p>
                <img
                    src="woman-with-phone.png"
                    alt="Woman with phone"
                    className="w-1/2 mx-auto"
                />
            </div>
        </section>
    );
};

export default HeroSection;
