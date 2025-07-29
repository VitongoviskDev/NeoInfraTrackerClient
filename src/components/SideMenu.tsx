import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { IoPerson } from 'react-icons/io5';

const SideMenu: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className='h-screen w-2xs bg-gray-900 text-gray-100'>
      {/* HEADER */}
      <div className='flex items-center justify-start gap-2 p-4 border-b border-gray-100/20'>
        <div className='w-[3rem] h-[3rem] bg-white rounded-full overflow-hidden'>
          {
            user!.profileImage !== '' ? (
              <img src={user!.profileImage} alt="" className='object-contain'/>
            ) : (
              <IoPerson />
            )
          }
        </div>
        <div>
          <p className='text-lg font-semibold'>{user!.name}</p>
          <p className='text-sm text-gray-500'>admin</p>
        </div>
      </div>
      {/* NAVIGATION */}
      <nav>

      </nav>
    </div>
  )
}

export default SideMenu