import React from 'react';
import TextComponent from "../../text/TextComponent";
import Button from "../../buttons/Button";
import Input from "../../input/Input";

const ContactPage = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 p-24'>
            <div className='text-center mb-10'>
                <TextComponent styleType='black' size='xl4'>
                    Contact Us
                </TextComponent>
                <p className='text-lg text-gray-600 mt-2'>
                    We'd love to hear from you. Fill out the form below or contact us directly.
                </p>
            </div>

            <div className='flex justify-center items-stretch w-full max-w-5xl space-x-6'>
                <form className='flex flex-col justify-center items-center shadow-md rounded-lg p-8 w-1/2 bg-white'>
                    <div className='mb-4 w-full'>
                        <Input
                            styleType='black'
                            size='xl1'
                            placeholder='Your Name'
                            onChange={(e) => console.log(e.target.value)}
                        />
                    </div>
                    <div className='mb-4 w-full'>
                        <Input
                            styleType='black'
                            size='xl1'
                            placeholder='Your Email'
                            onChange={(e) => console.log(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <Button
                            styleType='black'
                            size='md'
                            onClick={() => alert("Message sent!")}
                        >
                            Send
                        </Button>
                    </div>
                </form>

                <div className='shadow-md rounded-lg px-8 w-1/2 bg-white flex flex-col justify-center'>
                    <div className='mb-4'>
                        <TextComponent styleType='black' size='xl2'>
                            Contact Information
                        </TextComponent>
                    </div>

                    <div className='space-y-3'>
                        <div className='flex items-center'>
                            <p className='text-gray-600 text-sm mr-2'>Email:</p>
                            <p className='text-gray-800 font-semibold'>contact@traderkek.com</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-gray-600 text-sm mr-2'>Phone:</p>
                            <p className='text-gray-800 font-semibold'>+7 111 111 11 11</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-gray-600 text-sm mr-2'>Address:</p>
                            <p className='text-gray-800 font-semibold'>
                                123 Somewhere St, Somewhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
