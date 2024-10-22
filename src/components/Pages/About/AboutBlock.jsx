import React from 'react';
import TextComponent from "../../text/TextComponent";

const AboutBlock = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 p-20">
            <div className='mb-10'>
                <TextComponent styleType="black" size="xl4">
                    About the Project
                </TextComponent>
                <p className="text-gray-700 text-lg max-w-4xl mx-auto mt-6">
                    Our project is designed to deliver full stock analysis across all levels for any purpose. It enables
                    users to build and track portfolios, follow specific stocks, and develop strategies based on
                    comprehensive data analysis. With the help of our custom-built AI, users can accelerate their
                    decision-making process and gain deeper insights into stock performance, making it easier to achieve
                    their financial goals.
                </p>
            </div>
        </div>
    );
};

export default AboutBlock;
