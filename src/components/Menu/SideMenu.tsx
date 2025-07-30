import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { IoPerson } from 'react-icons/io5';

import SideMenuData from '../../util/Menu';
import Submenu from './Submenu';

const SideMenu: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className='flex flex-col fixed h-screen w-[17rem] bg-gray-900 text-gray-100'>
      {/* HEADER */}
      <div className='flex items-center justify-start gap-2 p-4 border-b border-gray-100/20'>
        <div className='w-[3rem] h-[3rem] bg-white rounded-full overflow-hidden'>
          {
            user!.profileImage !== '' ? (
              <img src={user!.profileImage} alt="" className='object-contain' />
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
      <nav className='py-8 px-4 overflow-y-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900'>
        <ul className='flex flex-col gap-3 text-gray-300'>
          {
            SideMenuData.map((menu, menuIndex) => {
              if (user!.roles.filter(role => role === menu.role).length > 0)
                return <Submenu key={menuIndex} menuDto={menu} />
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default SideMenu