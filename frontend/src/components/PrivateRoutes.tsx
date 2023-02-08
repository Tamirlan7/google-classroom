import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UseTypedSelector } from '../hooks/redux';


const PrivateRoutes: React.FC = () => {

    const isAuthenticated = UseTypedSelector(state => state.auth.isAuthenticated);

    return (
        !isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
    );
}

export default PrivateRoutes;
