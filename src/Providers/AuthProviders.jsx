import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';



export const AuthContaxt = createContext(null);
const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleprovider)
    }

    const githubsignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubprovider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in unsubscribe', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return() => {
            unSubscribe();
        }
    })



    const authInfo = {
        user,
        loading,
        createUser,
        SignIn,
        googleSignin,
        githubsignIn,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContaxt.Provider value={authInfo}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProviders;