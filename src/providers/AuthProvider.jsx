import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
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

  const updateprofile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged user here", loggedUser);
      setUser(loggedUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    userLogin,
    setUser,
    updateprofile,
  };
  return (
    <AuthConText.Provider value={userInfo}>{children}</AuthConText.Provider>
  );
};

export default AuthProvider;
