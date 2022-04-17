import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return;
    }
    if (!user) {
        return <Navigate to='/logIn' state={{ from: location }} replace />
    }
    else {
        return children;
    }
};

export default RequireAuth;