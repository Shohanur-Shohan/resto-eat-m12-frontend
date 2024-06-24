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
import { createToken } from "../utils/api";

const AuthPovider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  //admin or user

  // const isAdmin = true;

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
    // isAdmin,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      const userInfo = {
        email: currentUser?.email,
      };
      // handleAuthChange
      const handleAuthChange = async () => {
        if (currentUser) {
          try {
            const result = await createToken(userInfo);
            if (result) {
              // console.log(result, result?.token);
              localStorage.setItem("access-token", result?.token);
      setLoading(false);
            } else {
              console.log("can not set token from auth");
              localStorage.removeItem("access-token");
              setLoading(false);
            }
          } catch (error) {
            console.log("something went wrong in handle auth change");
            setLoading(false);
          }
        } else {
          console.log("can not set token from auth");
          localStorage.removeItem("access-token");
          setLoading(false);
        }
      };
      handleAuthChange();
      // console.log(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthPovider.propTypes = {
  children: PropTypes.element,
};
export default AuthPovider;
