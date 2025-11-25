import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../components/Pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading, } = useContext(AuthContext);
console.log(loading);

    if (loading) {
        return <Loading></Loading>
    }
   
    if (user) {
    return children
}
    return <Navigate to={'/login'}></Navigate>

};

export default PrivateRoute;