import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthConText = createContext([]);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    createUser,
    userLogin,
    setUser,
  };
  return (
    <AuthConText.Provider value={userInfo}>{children}</AuthConText.Provider>
  );
};

export default AuthProvider;
