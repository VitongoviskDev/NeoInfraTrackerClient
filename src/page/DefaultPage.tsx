import React from 'react'

interface DefaultPageProps {
  children: React.ReactNode;
}

const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {

  return (
    <div className='flex-1 flex flex-colw-screen w-full min-h-full p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50/7D'>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  )
}

export default DefaultPage