import React from 'react';
import TextComponent from '../../text/TextComponent';


const Overview = () => {
    const portfolioValue = 25000;
    const portfolioChange = 5.2;
    const stockCount = 12;

    return (
        <div className='bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto mb-10'>
            <TextComponent styleType='black' size='xl3' className='mb-4'>
                Portfolio Overview
            </TextComponent>

            <div className='grid grid-cols-3 gap-6'>
                <div className='text-center'>
                    <TextComponent styleType='black' size='xl1'>
                        ${portfolioValue.toLocaleString()}
                    </TextComponent>
                    <p className='text-gray-600'>Total Portfolio Value</p>
                </div>

                <div className='text-center'>
                    <TextComponent styleType={portfolioChange >= 0 ? 'green' : 'red'} size='xl1'>
                        {portfolioChange >= 0 ? `+${portfolioChange}%` : `${portfolioChange}%`}
                    </TextComponent>
                    <p className='text-gray-600'>Change (Last Period)</p>
                </div>

                <div className='text-center'>
                    <TextComponent styleType='black' size='xl1'>
                        {stockCount}
                    </TextComponent>
                    <p className='text-gray-600'>Stocks in Portfolio</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
