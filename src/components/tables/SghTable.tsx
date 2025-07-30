import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import type { SghMachineDTO } from '../../dto/machineDTO'

interface SghTableProps{
    machines: SghMachineDTO[];
}

const SghTable: React.FC<SghTableProps> = ({machines}) => {

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
                        <th className={`${tableHeaderClass}`}>Modelo</th>
                        <th className={`${tableHeaderClass}`}>Fabricante</th>
                        <th className={`${tableHeaderClass}`}>Processador</th>
                        <th className={`${tableHeaderClass}`}>Tipo</th>
                        <th className={`${tableHeaderClass}`}>Site</th>
                        <th className={`${tableHeaderClass}`}>Status</th>
                        <th className={`${tableHeaderClass}`}>Posse</th>
                        <th className={`${tableHeaderClass}`}>Operação</th>
                    </tr>
                </thead>
                <tbody className='[&_tr:last-child]:border-0'>
                    {
                        machines.map((machine, index) => (
                            <tr key={index} className='cursor-pointer border-b border-gray-300 hover:bg-gray-200'>
                                <td className={tableDataClass}>{`${machine.id}`}</td>
                                <td className={tableDataClass}>{`${machine.asset}`}</td>
                                <td className={tableDataClass}>{`${machine.serial}`}</td>
                                <td className={tableDataClass}>{`${machine.model}`}</td>
                                <td className={tableDataClass}>{`${machine.manufacturer}`}</td>
                                <td className={tableDataClass}>{`${machine.cpu}`}</td>
                                <td className={tableDataClass}>{`${machine.type}`}</td>
                                <td className={tableDataClass}>{`${machine.site}`}</td>
                                <td className={tableDataClass}>{`${machine.status}`}</td>
                                <td className={tableDataClass}>{`${machine.possession}`}</td>
                                <td className={tableDataClass}>{`${machine.operation}`}</td>
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

export default SghTable