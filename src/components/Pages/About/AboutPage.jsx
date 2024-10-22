import React from 'react';
import AboutBlock from "./AboutBlock";
import TeamBlock from "./TeamBlock";
import VisionBlock from "./VisionBlock";

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100">
            <AboutBlock />
            <TeamBlock />
            <VisionBlock />
        </div>
    );
};

export default AboutPage;
