import React from 'react';
import TextComponent from "../../text/TextComponent";

const FeaturesBlock = () => {
    const features = [
        {
            title: "Full Stock Analysis",
            description: "Get an in-depth analysis of stocks across all key financial metrics and market indicators.",
        },
        {
            title: "Portfolio Management",
            description: "Manage and track your stock portfolio with ease, set up alerts, and monitor performance.",
        },
        {
            title: "Customizable Strategies",
            description: "Build and implement your own investment strategies using real-time data and predictive algorithms.",
        },
        {
            title: "Real-time Market Data",
            description: "Access live data from stock markets and incorporate it into your analysis and decision-making process.",
        },
    ];

    return (
        <div className='py-16 bg-gray-100'>
            <div className='text-center mb-10'>
                <TextComponent styleType='black' size='xl4'>
                    Key Features
                </TextComponent>
                <p className='text-lg text-gray-600 mt-2'>
                    Discover the powerful tools and capabilities we offer to enhance your trading experience.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
                {features.map((feature, index) => (
                    <div key={index} className='bg-white shadow-md rounded-lg p-6 text-center'>
                        <TextComponent styleType='black' size='lg' className='mb-4'>
                            {feature.title}
                        </TextComponent>
                        <p className='text-gray-600'>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesBlock;
