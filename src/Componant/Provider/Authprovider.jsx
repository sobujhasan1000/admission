import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';



export const AuthContest=createContext();
const auth=getAuth(app);

const googleAuthProvider=new GoogleAuthProvider();
const Authprovider = ({children}) => {
    
        const [user, setUser]=useState(null);
        const [loading,setloding]=useState(true);
    
        const createUser=(email, password)=>{
            setloding(true)
            return createUserWithEmailAndPassword(auth,email,password)
        }
    
        const singIn=(email, password)=>{
            setloding(true)
            return signInWithEmailAndPassword(auth,email,password)
        }
    
        const logOut=()=>{
            setloding(true)
            return signOut(auth)
         }
    
         const singInwithgoogle=()=>{
            setloding(true)
            return signInWithPopup(auth,googleAuthProvider)
        };
    
        useEffect(()=>{
            const unsubcribe= onAuthStateChanged(auth,currentUser=>{
                //  console.log(currentUser)
                 setUser(currentUser)
                 setloding(false)
             });
     
             return()=>{
                 unsubcribe()
             }
         },[])
    
        const authInfo={
                   user,createUser,singIn,logOut,singInwithgoogle,loading
        }
        return (
            <AuthContest.Provider value={authInfo}>
                {children}
            </AuthContest.Provider>
        )
};

export default Authprovider;