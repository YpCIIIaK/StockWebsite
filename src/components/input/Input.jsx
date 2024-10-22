import React from 'react';

const Input = ({
                   styleType = 'black',
                   placeholder,
                   onChange,
                   icon,
                   size,
                   iconPosition = 'left',
                   disabled,
                   onFocus,
                   onBlur
               }) => {

    const sizeStyles = {
        sm: 'w-[200px]',
        md: 'w-[300px]',
        lg: 'w-[350px]',
        xl1: 'w-[400px]',
    }

    const baseStyles = 'rounded-lg font-medium py-2 px-4 m-2 transition-all flex items-center';

    const styleTypes = {
        black: 'bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500',
        gray600: 'bg-gray-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500',
        white: 'bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300',
    };

    return (
        <div className={`relative ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {/*{icon && iconPosition === 'left' && (*/}
            {/*    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">*/}
            {/*        {icon}*/}
            {/*    </div>*/}
            {/*)}*/}
            <input
                type="text"
                className={`${baseStyles} ${sizeStyles[size]} ${styleTypes[styleType]} ${icon ? (iconPosition === 'left' ? '' : '') : ''}`}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                disabled={disabled}
            />
            {/*{icon && iconPosition === 'right' && (*/}
            {/*    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">*/}
            {/*        {icon}*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default Input;
