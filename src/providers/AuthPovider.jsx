import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../config/firebase.config";
import { useEffect } from "react";

const AuthPovider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update user
  const updateUserData = (displayName) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: displayName,
    });
  };
  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //signin
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    createUser,
    updateUserData,
    loading,
    setLoading,
    user,
    setUser,
    logOut,
    userSignIn,
    googleSignin,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setUser(user);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // console.log(user);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthPovider.propTypes = {
  children: PropTypes.element,
};
export default AuthPovider;
