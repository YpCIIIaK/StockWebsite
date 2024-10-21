import React from 'react';
import TextComponent from "../../text/TextComponent";

const HomePage = () => {
    return (
        <div>
            <div className='h-[600px] flex flex-col justify-center items-center'>
                <TextComponent styleType='black' size='xl4'>
                    Contact Us
                </TextComponent>
            </div>
        </div>
    );
};

export default HomePage;
