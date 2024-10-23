import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../input/Input";
import Button from "../../buttons/Button";
import TextComponent from "../../text/TextComponent";


const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className='h-[600px] flex flex-col justify-center items-center'>
            <div className='mb-8'>
                <TextComponent styleType='black' size='xl4'>
                    Registration form
                </TextComponent>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <Input
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    name="name"
                    size="md"
                    styleType="white"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    size="md"
                    styleType="white"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    size="md"
                    styleType="white"
                />
                <div className='mt-4'>
                    <Button
                        type="submit"
                        styleType="black"
                        size="md"
                    >
                        Register
                    </Button>
                </div>
            </form>
            <div className='mt-6 flex items-center space-x-2'>
                <TextComponent styleType='black' size='md'>
                    Already have an account?
                </TextComponent>
                <Button
                    onClick={() => navigate('/login')}
                    styleType="gray600"
                    size="sm"
                    className='ml-2'
                >
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Register;
