import React from 'react'
import { useAuth } from '../hooks/useAuth'

const SideMenu = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className='flex'>
        <img src="" alt="" />
        <div>
          <p className='text-lg font-semibold'>{user.name}</p>
          <p className='text-sm'>{user.role}</p>
        </div>
      </div>
      <nav>

      </nav>
    </div>
  )
}

export default SideMenu