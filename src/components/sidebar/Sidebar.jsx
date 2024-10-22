import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-10'} h-screen bg-gray-800 text-white flex flex-col`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <NavLink
                to={'/portfolio/overview'}
                className={({ isActive }) =>
                    isActive ? 'bg-gray-700 p-4' : 'p-4 hover:bg-gray-600'
                }
            >
                {isOpen && 'Overview'}
            </NavLink>
        </div>
    );
};

export default Sidebar;
