import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import type { MenuDTO } from '../../dto/menuDTO';
import { IoIosArrowDown } from 'react-icons/io';

interface SubmenuProps {
    open?: boolean;
    menuDto: MenuDTO;
}

const Submenu: React.FC<SubmenuProps> = ({ open = true, menuDto }) => {

    const [shown, setShown] = useState<boolean>(open);

    return (
        <li
            className={`
                cursor-pointer rounded-lg 
                ${shown ? 'bg-gray-800' : ''}
            `}>
            <div
                onClick={() => setShown(prev => !prev)}
                className='flex justify-between p-2 rounded-lg hover:bg-gray-800'>
                <p className='text-sm font-semibold text-gray-200'>{menuDto.name}</p>
                <IoIosArrowDown />
            </div>
            <div
                className={`
                text-md bg-gray-700/50 rounded-lg overflow-hidden
                ${shown ? 'block' : 'hidden'}
            `}>
                <ul className='flex flex-col gap-1 '>
                    {
                        menuDto.items.map((item, index) => (
                            <Link
                                key={`${menuDto.name}_${index}`}
                                to={item.url}
                                className='flex items-center gap-2 px-4 py-1 hover:bg-gray-700'>
                                {item.icon}
                                <p>{item.label}</p>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </li>
    )
}

export default Submenu