'use client'
import { createContext, useContext } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import {app} from '../firebase'
import { getDatabase, ref, set } from "firebase/database";


const FirebaseContext = createContext(null)
const auth = getAuth(app)
const database = getDatabase(app)
const googleProvider = new GoogleAuthProvider()
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props: any) => {

    const signupWithEmailAndPassword = (email: any, password: any) => {
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const signInUser = (email: any, password: any) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singInWithGoogle = () => {
        console.log("Sign in with google")
        signInWithPopup(auth, googleProvider)
    }

    const putData = (key: any, data: any) => set(ref(database, key), data)

    const stateChanged = () => {
        onAuthStateChanged(auth, (user) => {
                return user
        })
    }

    const logout = () => {
        console.log("inside logout")
        return signOut(auth)
    }

    return (
        <FirebaseContext.Provider value={{signupWithEmailAndPassword, putData, singInWithGoogle, stateChanged, logout}}>
            {props.children}    
        </FirebaseContext.Provider>
    )
}