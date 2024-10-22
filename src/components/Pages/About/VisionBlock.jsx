import React from 'react';
import TextComponent from "../../text/TextComponent";

const AboutBlock = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-100 p-20">
            <div className="w-full max-w-3xl text-center">
                <TextComponent styleType="black" size="xl3">
                    Our Vision
                </TextComponent>
                <p className="text-gray-600 mt-4">
                    TraderKek is created with one goal in mind: to simplify and speed up comprehensive stock analysis by
                    leveraging the power of AI. Our AI technology is designed to provide users with in-depth insights
                    and forecasts, allowing investors to make informed decisions faster and more efficiently.
                </p>
            </div>
        </div>
    );
};

export default AboutBlock;
