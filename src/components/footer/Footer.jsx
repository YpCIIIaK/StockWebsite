import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ links, text, styleType = 'black' }) => {
    const baseStyles = 'flex flex-col items-center justify-center p-4';

    const styleTypes = {
        black: 'bg-black text-white',
        gray600: 'bg-gray-600 text-white',
        white: 'bg-white text-black',
    };

    const footerStyles = `${baseStyles} ${styleTypes[styleType]}`;

    return (
        <footer className={footerStyles}>
            {text && <div className="mb-2 text-center">{text}</div>}
            <div className="flex space-x-4">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.to}
                        className="hover:underline focus:outline-none"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
