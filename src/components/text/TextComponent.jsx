import React from 'react';

const TextComponent = ({
                           children,
                           styleType = 'black',
                           icon,
                           size,
                           iconPosition = 'left',
                       }) => {
    const baseStyles = 'text-center font-medium my-2 transition-all flex items-center justify-center';

    const sizeStyles = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl1: 'text-xl',
        xl2: 'text-[30px]',
        xl3: 'text-[40px]',
        xl4: 'text-[50px]',
    };

    const styleTypes = {
        black: 'text-black hover:text-gray-800',
        gray600: 'text-gray-600 hover:text-gray-700',
        white: 'text-white hover:text-gray-200',
    };

    const textStyles = `${baseStyles} ${sizeStyles[size]} ${styleTypes[styleType]}`;

    return (
        <span className={textStyles}>
            <span className={`flex items-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
              {icon && <span className={`mr-2 ${iconPosition === 'right' ? 'ml-2' : ''}`}>{icon}</span>}
                {children}
            </span>
        </span>
    );
};

export default TextComponent;
