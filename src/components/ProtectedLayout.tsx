import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import SideMenu from './Menu/SideMenu';


const ProtectedLayout: React.FC = () => {
    const { user } = useAuth();

    return !user ? (
        <Navigate to={"/login"} />
    ) : (
        <div className='grid grid-cols-[auto_1fr]'>
            <SideMenu />
            <Outlet />
        </div>
    )
};

export default ProtectedLayout;
