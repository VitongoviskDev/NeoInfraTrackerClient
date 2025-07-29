import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RiComputerLine } from 'react-icons/ri'

const StorageTable: React.FC = () => {
    const tableHeaderClass = 'p-2 bg-gray-300';
    const tableDataClass = '';
    return (
        <div className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0'>
            <div className=''>
                <div className='flex items-end text-gray-900'>
                    <RiComputerLine className='text-2xl' />
                    <h2 className='text-xl font-semibold'>Máquinas em Estoque</h2>
                </div>
                <p className='text-sm text-gray-600'>Lista de equipamentos mapeados no estoque físico</p>
            </div>
            <table className=''>
                <thead className=''>
                    <tr className=''>
                        <th className={`${tableHeaderClass}`}>-</th>
                        <th className={`${tableHeaderClass}`}>Fabricante</th>
                        <th className={`${tableHeaderClass}`}>Modelo</th>
                        <th className={`${tableHeaderClass}`}>Ativo</th>
                        <th className={`${tableHeaderClass}`}>Serial</th>
                        <th className={`${tableHeaderClass}`}>Hostname</th>
                        <th className={`${tableHeaderClass}`}>Observação</th>
                        <th className={`${tableHeaderClass}`}>Ações</th>
                    </tr>
                </thead>
                <tbody className=''>

                </tbody>
                <tr className=''>
                    <td className='tableDataClass'>1</td>
                    <td className='tableDataClass'>DELL</td>
                    <td className='tableDataClass'>Optiplex 3080</td>
                    <td className='tableDataClass'>N012345</td>
                    <td className='tableDataClass'>PE06S67S</td>
                    <td className='tableDataClass'>DTPE06S67S</td>
                    <td className='tableDataClass'>-</td>
                    <td className='tableDataClass'>
                        <BsThreeDotsVertical />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default StorageTable