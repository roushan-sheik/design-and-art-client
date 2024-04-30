import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const twiiterProvider = new TwitterAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [loading, setLoading] = useState(true);
  const [reloade, setReloade] = useState(false);

  const handleGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handleTwitter = () => {
    return signInWithPopup(auth, twiiterProvider);
  };
  const handleGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUser = async (username, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    }).then(() => {
      setReloade(Math.random());
    });
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, [reloade]);
  const authInfo = {
    createUser,
    handleGoogle,
    handleTwitter,
    handleGithub,
    singInuser,
    loading,
    setLoading,
    updateUser,
    user,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
