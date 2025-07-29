import React from 'react'

interface FilterItemsListProps {
    items: string[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

const FilterItemsList: React.FC<FilterItemsListProps> = ({ items, selectedValue, setSelectedValue }) => {

    return (
        <ul className={`flex flex-nowrap items-center justify-center gap-2 p-1 bg-gray-200 rounded-lg font-medium`}>
            {
                items.map((item, index) => (
                    <li
                        key={index}
                        className={`
                            cursor-pointer flex-1 px-4 py-2 text-center rounded-md
                            ${selectedValue === item ? 'bg-gray-800 text-gray-100' : 'text-gray-700'}
                        `}
                        onClick={() => setSelectedValue(item)}>
                        <p className='text-nowrap'>{item}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default FilterItemsList