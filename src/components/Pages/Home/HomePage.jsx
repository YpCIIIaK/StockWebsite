import React from 'react';
import Hero from "./Hero";
import AnalysisTypes from "./AnalysisTypes";
import AIBlock from "./AIBlock";
import FeaturesBlock from "./FeaturesBlock";

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <AnalysisTypes />
            <AIBlock />
            <FeaturesBlock />
        </div>
    );
};

export default HomePage;
