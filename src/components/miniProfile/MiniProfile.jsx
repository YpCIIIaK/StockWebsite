import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const MiniProfile = ({ username }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("User logged out");
        navigate('/login');
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
            >
                <FaUserCircle className="text-3xl text-white mr-2" />
                <span className="text-white font-medium">{username}</span>
            </div>
            {isOpen && (
                <ul className="absolute right-0 mt-2 bg-gray-700 text-white rounded-lg w-48 shadow-lg">
                    <li
                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                        onClick={() => navigate('/profile')}
                    >
                        Профиль
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                        onClick={() => navigate('/settings')}
                    >
                        Настройки
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                        onClick={handleLogout}
                    >
                        Выйти
                    </li>
                </ul>
            )}
        </div>
    );
};

export default MiniProfile;
