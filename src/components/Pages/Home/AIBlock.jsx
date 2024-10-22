import React from 'react';
import { FaRobot } from 'react-icons/fa';
import TextComponent from "../../text/TextComponent";

const AIBlock = () => {
    return (
        <div className="h-[350px] bg-white py-12 flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <div className="flex items-center justify-center mb-6">
                    <FaRobot className="text-6xl mr-4 text-black" />
                    <TextComponent size="xl3" styleType="black">
                        Powered by Artificial Intelligence
                    </TextComponent>
                </div>
                <TextComponent size="lg" styleType="black">
                    Our project utilizes a specially designed AI system tailored for stock and market analysis.
                </TextComponent>
                <TextComponent size="md" styleType="gray600" className="mt-4">
                    This AI provides real-time insights and recommendations, ensuring accurate and timely decisions based on deep market data.
                </TextComponent>
            </div>
        </div>
    );
};

export default AIBlock;
