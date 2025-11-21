import React, { useContext } from "react";

const AuthContext = useContext();


const AuthProvider = ({ children }) => {
    
    const registerWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword()
    }

    const authData = {
        
    }

    return <AuthContext>
        {children}
    </AuthContext>;
};

export default AuthProvider;
