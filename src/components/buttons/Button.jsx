import React from 'react';

const Button = ({
                    children,
                    styleType = 'black',
                    onClick,
                    icon,
                    size,
                    iconPosition = 'left',
                    disabled
            }) => {
    const baseStyles = 'rounded-lg text-center font-medium py-2 px-4 my-2 transition-all flex items-center justify-center';

    const sizeStyles = {
        sm: 'w-[100px]',
        md: 'w-[200px]',
        lg: 'w-[300px]',
        xl1: 'w-[400px]',
    }

    const styleTypes = {
        black: 'bg-black text-white hover:bg-gray-800 active:bg-gray-700',
        gray600: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-black',
        white: 'bg-white text-black hover:bg-gray-200 active:bg-gray-300',
    };

    const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${styleTypes[styleType]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    return (
        <button
            className={buttonStyles}
            onClick={disabled ? null : onClick}
            disabled={disabled}
        >
            <span className={`flex items-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
                {icon && <span className={`mr-2 ${iconPosition === 'right' ? 'ml-2' : ''}`}>{icon}</span>}
                {children}
            </span>
        </button>
    );
};

export default Button;