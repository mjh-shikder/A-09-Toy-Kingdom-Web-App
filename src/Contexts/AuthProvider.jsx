import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  //
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log('user from authprovider', {user});
  

  // Create user with email and password.
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const userLogin = (email, passowrd) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passowrd);
  }

  // Observer
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe()
    }
  })
  
  // Signout
  const logOut = () => {
    return signOut(auth);
  }

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    userLogin,
    logOut,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
