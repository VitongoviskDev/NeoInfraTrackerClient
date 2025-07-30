import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import type { ProductionMachineDTO } from '../../dto/machineDTO'

interface ProductionTableProps{
    machines: ProductionMachineDTO[];
}

const ProductionTable: React.FC<ProductionTableProps> = ({machines}) => {

    const tableHeaderClass = 'p-4 text-left align-middle font-medium text-gray-600';
    const tableDataClass = 'p-4 text-left align-middle';

    return (
        <div className='relative w-full'>
            <table className='w-full caption-bottom text-sm mt-4'>
                <thead>
                    <tr className='border-b border-gray-300'>
                        <th className={`${tableHeaderClass}`}>ID</th>
                        <th className={`${tableHeaderClass}`}>Local</th>
                        <th className={`${tableHeaderClass}`}>PA/Responsável</th>
                        <th className={`${tableHeaderClass}`}>Célula</th>
                        <th className={`${tableHeaderClass}`}>Catergoria</th>
                        <th className={`${tableHeaderClass}`}>Ativo</th>
                        <th className={`${tableHeaderClass}`}>SGH</th>
                        <th className={`${tableHeaderClass}`}>Serial</th>
                        <th className={`${tableHeaderClass}`}>SGH</th>
                        <th className={`${tableHeaderClass}`}>Hostname</th>
                    </tr>
                </thead>
                <tbody className='[&_tr:last-child]:border-0'>
                    {
                        machines.map((machine, index) => (
                            <tr key={index} className='cursor-pointer border-b border-gray-300 hover:bg-gray-200'>
                                <td className={tableDataClass}>{`${machine.id}`}</td>
                                <td className={tableDataClass}>{`${machine.local}`}</td>
                                <td className={tableDataClass}>{`${machine.workingStation}`}</td>
                                <td className={tableDataClass}>{`${machine.cell}`}</td>
                                <td className={tableDataClass}>{`${machine.category}`}</td>
                                <td className={tableDataClass}>{`${machine.asset}`}</td>
                                <td className={tableDataClass}>{`${machine.serial}`}</td>
                                <td className={tableDataClass}>{`${machine.sgh_status}`}</td>
                                <td className={tableDataClass}>{`${machine.hostname}`}</td>
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

export default ProductionTable