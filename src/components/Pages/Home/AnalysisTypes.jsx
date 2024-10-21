import React from 'react';
import { FaChartLine, FaSearchDollar, FaChartBar } from 'react-icons/fa';
import TextComponent from "../../text/TextComponent";

const AnalysisTypes = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4">
                <TextComponent size="xl3" styleType="black">
                    Types of Analysis
                </TextComponent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <TextComponent icon={<FaSearchDollar />} size="xl1" styleType="black" iconPosition="top" />
                        <TextComponent size="lg" styleType="black">
                            Fundamental Analysis
                        </TextComponent>
                        <TextComponent size="md" styleType="gray600">
                            Analyze financial statements, earnings reports, and economic factors to determine stock value.
                        </TextComponent>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <TextComponent icon={<FaChartLine />} size="xl1" styleType="black" iconPosition="top" />
                        <TextComponent size="lg" styleType="black">
                            Technical Analysis
                        </TextComponent>
                        <TextComponent size="md" styleType="gray600">
                            Use charts, trends, and market data to predict future price movements based on historical patterns.
                        </TextComponent>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <TextComponent icon={<FaChartBar />} size="xl1" styleType="black" iconPosition="top" />
                        <TextComponent size="lg" styleType="black">
                            Volume Analysis
                        </TextComponent>
                        <TextComponent size="md" styleType="gray600">
                            Measure trading volume to gauge the strength or weakness of a market movement.
                        </TextComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalysisTypes;
