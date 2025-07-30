import React, { useEffect, useState } from 'react'
import DefaultPage from './DefaultPage'
import type { SghMachineDTO } from '../dto/machineDTO'

import { sghDB } from '../util/Machines'
import SghTable from '../components/tables/SghTable'

const BaseSghPage:React.FC = () => {
    const [machines, setMachines] = useState<SghMachineDTO[]>([])

    useEffect(() => {
        setMachines(sghDB);
    }, [])

    return (
        <DefaultPage>
            <SghTable machines={machines}/>
        </DefaultPage>
    )
}

export default BaseSghPage