import React, { useEffect, useState } from 'react'
import { RiComputerLine } from 'react-icons/ri'
import type { ProductionMachineDTO } from '../../dto/machineDTO'
import { machinesDB } from '../../util/Machines'
import ProductionTable from './ProductionTable'


const ProductionTableContainer: React.FC = () => {

    const [machines, setMachines] = useState<ProductionMachineDTO[]>([])

    useEffect(() => {
        setMachines(machinesDB.production);
    }, [])

    return (
        <div className='w-full p-4 ring ring-gray-300 rounded-lg'>
            <div className=''>
                <div className='flex gap-2 items-end text-gray-900'>
                    <RiComputerLine className='text-2xl' />
                    <h2 className='text-xl font-semibold'>Máquinas em Manutenção</h2>
                </div>
                <p className='text-sm text-gray-600'>Lista de equipamentos mapeados em produção</p>
            </div>
            <ProductionTable machines={machines}/>
        </div>
    )
}

export default ProductionTableContainer