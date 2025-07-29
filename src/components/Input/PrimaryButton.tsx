import React, { type ReactNode } from 'react'

interface PrimaryButtonProps {
    text: string;
    icon: ReactNode;
    onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, icon, onClick }) => {
    return (
        <button
            onClick={() => onclick}
            className='flex items-center gap-2 px-4 py-2 text-gray-100 font-semibold bg-blue-400 rounded-md'>
            {icon}
            {text}
        </button>
    )
}

export default PrimaryButton