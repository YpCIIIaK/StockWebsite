import React from 'react';
import TextComponent from "../../text/TextComponent";

const HomePage = () => {
    return (
        <div>
            <div className='h-[600px] flex flex-col justify-center items-center'>
                <TextComponent styleType='black' size='xl4'>
                    Privacy Policy & Terms of Service
                </TextComponent>

            </div>
        </div>
    );
};

export default HomePage;
