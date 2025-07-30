import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import SideMenu from './Menu/SideMenu';


const ProtectedLayout: React.FC = () => {
    const { user } = useAuth();

    return !user ? (
        <Navigate to={"/login"} />
    ) : (
        <div className='min-h-screen grid grid-cols-[17rem_1fr] w-sceen'>
            <div className='relative'>
                <SideMenu />
            </div>
            <Outlet />
        </div>
    )
};

export default ProtectedLayout;
