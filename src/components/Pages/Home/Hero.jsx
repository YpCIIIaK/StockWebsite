import React from 'react';
import TextComponent from "../../text/TextComponent";

const Hero = () => {
    return (
        <div className='h-[400px] bg-white flex flex-col justify-center items-center'>
            <TextComponent styleType='black' size='xl4'>
                Analyze the shares
            </TextComponent>
            <TextComponent styleType='black' size='lg'>
                Don't miss the opportunity for a tangle analysis based on algorithms
            </TextComponent>
        </div>
    );
};

export default Hero;
