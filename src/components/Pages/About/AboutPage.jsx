import React from 'react';
import TextComponent from "../../text/TextComponent";

const AboutPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <div className="text-center mb-10">
                <TextComponent styleType="black" size="xl4">
                    Meet the Team Behind TraderKek
                </TextComponent>
                <p className="text-lg text-gray-600 mt-2">
                    Two developers on a mission to revolutionize stock analysis with the power of Artificial Intelligence.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6">
                <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                    <TextComponent styleType="black" size="xl2">
                        React Specialist
                    </TextComponent>
                    <TextComponent styleType='black' size='md'>
                        <strong className='mr-1'>Role:</strong>FullStack React Developer
                    </TextComponent>
                    <p className="text-gray-600 mt-2">
                        Vladimir is the developer behind the design and structure of TraderKek, ensuring a seamless user experience built with React.js and cutting-edge front-end technologies.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                    <TextComponent styleType="black" size="xl2">
                        Python Specialist
                    </TextComponent>
                    <TextComponent styleType='black' size='md'>
                        <strong className='mr-1'>Role:</strong>AI Developer
                    </TextComponent>
                    <p className="text-gray-600 mt-2">
                        The mastermind behind the AI powering TraderKek. He designed a powerful machine learning model that analyzes stock data to provide insightful and fast recommendations.
                    </p>
                </div>
            </div>

            <div className="mt-12 w-full max-w-3xl text-center">
                <TextComponent styleType="black" size="xl3">
                    Our Vision
                </TextComponent>
                <p className="text-gray-600 mt-4">
                    TraderKek is created with one goal in mind: to simplify and speed up comprehensive stock analysis by leveraging the power of AI. Our AI technology is designed to provide users with in-depth insights and forecasts, allowing investors to make informed decisions faster and more efficiently.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
