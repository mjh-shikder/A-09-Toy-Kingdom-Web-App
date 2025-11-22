import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  //
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    userLogin,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
