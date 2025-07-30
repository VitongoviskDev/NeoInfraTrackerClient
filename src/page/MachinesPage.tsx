import React, { useState } from 'react'
import DefaultPage from './DefaultPage'
import SearchBox from '../components/Input/SearchBox'
import FilterItemsList from '../components/Input/FilterItemsList'
import PrimaryButton from '../components/Input/PrimaryButton'
import { IoMdAdd } from 'react-icons/io'
import SecondaryButton from '../components/Input/SecondaryButton'
import { MdOutlineFileDownload } from 'react-icons/md'
import { useAuth } from '../hooks/useAuth'
import StorageTableContainer from '../components/tables/StorageTableContainer'
import MaintenanceTableContainer from '../components/tables/MaintenanceTableContainer'
import ProductionTableContainer from '../components/tables/ProductionTableContainer'

const MachinesPage: React.FC = () => {
  const { user } = useAuth();

  const [storageLocal, setStorageLocal] = useState<string>(storageLocals[0])

  return (
    <DefaultPage>
      <header className='flex items-center justify-between w-full'>
        <div>
          <h1 className='text-3xl text-gray-700 font-bold'>Máquinas</h1>
          <p className='text-sm text-gray-400'>Gerencimento de equipamentos do site {user?.site.abreviation}</p>
        </div>
        <div className='flex items-center gap-2'>
          <SecondaryButton onClick={() => { }} icon={<MdOutlineFileDownload />} text='Exportar' />
          <PrimaryButton onClick={() => { }} icon={<IoMdAdd />} text='Nova Máquina' />
        </div>
      </header>
      <main className='mt-8'>
        {/* FILTERS */}
        <section className=''>
          <SearchBox placeholder='Local, Pa, Serial, Ativo, Hostname, Modelo etc.' />
        </section>
        {/* DADOS */}
        <section className='mt-8'>
          <FilterItemsList items={storageLocals} selectedValue={storageLocal} setSelectedValue={setStorageLocal} />
          <div className='mt-2'>
            {
              storageLocal === 'Produção' ? (
                <ProductionTableContainer/>
              ) :
              storageLocal === 'Estoque' ? (
                <StorageTableContainer />
              ) :
              storageLocal === 'Manutenção' ? (
                <MaintenanceTableContainer />
              ) :
              storageLocal === 'Bancada' ? (
                <>Bancada</>
              ) :
              (
                <>Descarte</>
              )
            }
          </div>
        </section>
      </main>
    </DefaultPage>
  )
}

export default MachinesPage

const storageLocals = ['Produção', 'Estoque', 'Manutenção', 'Bancada', 'Descarte'];