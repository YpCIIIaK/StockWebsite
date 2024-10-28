import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartPie } from 'react-icons/fa'; // Импортируем иконку

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`transition-all duration-300 ${isOpen ? 'w-52' : 'w-14'} h-screen bg-gray-800 text-white flex flex-col`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <NavLink
                to={'/portfolio/overview'}
                className={({ isActive }) =>
                    isActive ? 'bg-gray-700 p-4 flex items-center' : 'p-4 flex items-center hover:bg-gray-600'
                }
            >
                <div className="w-12 flex justify-center">
                    <FaChartPie className="text-xl" />
                </div>
                <span
                    className={`ml-2 overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    style={{ width: isOpen ? 'auto' : '0' }}
                >
                    Overview
                </span>
            </NavLink>
        </div>
    );
};

export default Sidebar;
