import React from 'react';
import TextComponent from "../../text/TextComponent";
import Button from "../../buttons/Button";

const Hero = () => {
    return (
        <div className='h-[360px] bg-white flex flex-col justify-center items-center p-8'>
            <TextComponent styleType='black' size='xl4' className='mb-4'>
                Analyze the Shares
            </TextComponent>
            <TextComponent styleType='black' size='lg' className='text-center max-w-2xl text-gray-700 mb-8'>
                Don't miss the opportunity for a deep, multi-level analysis of shares using powerful AI algorithms.
            </TextComponent>
            <Button
                styleType='black'
                size='md'
                onClick={() => alert('Get Started!')}
            >
                Get Started
            </Button>
        </div>
    );
};

export default Hero;
