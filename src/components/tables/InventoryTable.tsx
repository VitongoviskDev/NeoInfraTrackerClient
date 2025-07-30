import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import type { inventoryMachineDTO } from '../../dto/machineDTO'

interface InventoryTableProps{
    machines: inventoryMachineDTO[];
}

const InventoryTable: React.FC<InventoryTableProps> = ({machines}) => {

    const tableHeaderClass = 'p-4 text-left align-middle font-medium text-gray-600';
    const tableDataClass = 'p-4 text-left align-middle';

    return (
        <div className='relative w-full'>
            <table className='w-full caption-bottom text-sm mt-4'>
                <thead>
                    <tr className='border-b border-gray-300'>
                        <th className={`${tableHeaderClass}`}>ID</th>
                        <th className={`${tableHeaderClass}`}>Ativo</th>
                        <th className={`${tableHeaderClass}`}>Serial</th>
                        <th className={`${tableHeaderClass}`}>Tipo</th>
                        <th className={`${tableHeaderClass}`}>Modelo</th>
                        <th className={`${tableHeaderClass}`}>Fabricante</th>
                        <th className={`${tableHeaderClass}`}>SGH</th>
                        <th className={`${tableHeaderClass}`}>Hostname</th>
                        <th className={`${tableHeaderClass}`}>Observação</th>
                        <th className={`${tableHeaderClass}`}>Ações</th>
                    </tr>
                </thead>
                <tbody className='[&_tr:last-child]:border-0'>
                    {
                        machines.map((machine, index) => (
                            <tr key={index} className='cursor-pointer border-b border-gray-300 hover:bg-gray-200'>
                                <td className={tableDataClass}>{`${machine.id}`}</td>
                                <td className={tableDataClass}>{`${machine.asset}`}</td>
                                <td className={tableDataClass}>{`${machine.serial}`}</td>
                                <td className={tableDataClass}>{`${machine.type}`}</td>
                                <td className={tableDataClass}>{`${machine.model}`}</td>
                                <td className={tableDataClass}>{`${machine.manufacturer}`}</td>
                                <td className={tableDataClass}>{`${machine.sgh_status}`}</td>
                                <td className={tableDataClass}>{`${machine.hostname}`}</td>
                                <td className={tableDataClass}>{`${machine.observation}`}</td>
                                <td className={tableDataClass}>
                                    <BsThreeDotsVertical />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default InventoryTable