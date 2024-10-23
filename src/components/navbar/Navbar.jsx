import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MiniProfile from "../miniProfile/MiniProfile";
import Button from "../buttons/Button";

const Navbar = ({ links, logo, styleType = 'black', onLinkClick }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const stockOptions = [
        { name: 'Apple', ticker: 'AAPL' },
        { name: 'Chevron', ticker: 'CVX' },
    ];

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 0) {
            const filteredSuggestions = stockOptions.filter((option) =>
                option.name.toLowerCase().includes(query.toLowerCase()) ||
                option.ticker.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (ticker) => {
        setSearchQuery('');
        setSuggestions([]);
        navigate(`/company/${ticker}`);
    };

    const handleNavLinkClick = (link) => {
        if (link.toLowerCase() === 'home') {
            navigate('/');
        } else if (link.toLowerCase() === 'about') {
            navigate('/about');
        } else if (link.toLowerCase() === 'portfolio') {
            navigate('/portfolio');
        }
    };

    const baseStyles = 'flex items-center justify-between p-4';
    const styleTypes = {
        black: 'bg-black text-white',
        gray600: 'bg-gray-600 text-white',
        white: 'bg-white text-black',
    };

    const navbarStyles = `${baseStyles} ${styleTypes[styleType]}`;

    return (
        <nav className={navbarStyles}>
            {logo && <a className="text-xl font-bold cursor-pointer">{logo}</a>}
            <div className="flex items-center space-x-4">
                {links.map((link, index) => (
                    <button
                        key={index}
                        className="hover:underline focus:outline-none"
                        onClick={() => handleNavLinkClick(link)}
                    >
                        {link}
                    </button>
                ))}
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="bg-gray-600 w-[350px] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg font-medium py-1 px-4 transition-all"
                    />
                    {suggestions.length > 0 && (
                        <ul className="absolute bg-gray-700 text-white rounded-lg mt-1 w-full">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-500 rounded-lg"
                                    onClick={() => handleSuggestionClick(suggestion.ticker)}
                                >
                                    {suggestion.name} ({suggestion.ticker})
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {isLoggedIn ? (
                    <MiniProfile username="Vladimir" />
                ) : (
                    <Button
                        styleType="white"
                        size="sm"
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </Button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
