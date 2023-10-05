import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "../firebase.config";

export const  AuthenticationProvider = new createContext(null)
const Authentication = ({children}) => {

    const [user,setUser] = useState(null)

    const signUp =(email,password)=>{

        return createUserWithEmailAndPassword (auth,email,password)
    }
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser) 
        }
        )
        return ()=>{
            unSubscribe()
        }
    },[])

    const logOut = ()=>{
        return signOut(auth)
    }

    const authValue = {signUp,logIn,user,logOut}
    return (
        <div>
            <AuthenticationProvider.Provider value={authValue}>
                {children}
            </AuthenticationProvider.Provider>
        </div>
    );
};

export default Authentication;