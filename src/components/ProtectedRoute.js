import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    return isAdmin ? <Component {...rest} /> : <Navigate to="/dashboard" />;
};

export default ProtectedRoute;