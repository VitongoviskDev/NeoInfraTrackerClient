import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import SideMenu from './SideMenu';


const ProtectedRoute: React.FC = () => {
    const { user } = useAuth();

    return !user ? (
        <Navigate to={"/login"} />
    ) : (
        <div className='flex'>
            <SideMenu />
            <Outlet />
        </div>
    )
};

export default ProtectedRoute;
