import React, { type ReactNode } from 'react'

interface SecondaryButtonProps {
    text: string;
    icon: ReactNode;
    onClick: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, icon, onClick }) => {

    const handleButtonClick = () => {
        onClick();
    }
    return (
        <button
            onClick={handleButtonClick}
            className='flex items-center gap-2 px-4 py-2 text-gray-900 font-semibold rounded-md ring ring-gray-400'>
            {icon}
            {text}
        </button>
    )
}

export default SecondaryButton