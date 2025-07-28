import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const ProtectedRoute: React.FC = () => {
    const { user } = useAuth();

    // vvv COMMENT TO REMOVE LOGIN vvv
    // return !user ? <Navigate to={"/login"} /> : <Outlet />;

    return <Outlet />
};

export default ProtectedRoute;
