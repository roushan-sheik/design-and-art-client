import React, { useContext } from 'react';
import { AuthContaxt } from '../Providers/AuthProviders';

const useAuth = () => {
    const all = useContext(AuthContaxt);
    return all
};

export default useAuth;