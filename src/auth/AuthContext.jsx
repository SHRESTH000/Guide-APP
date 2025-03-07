import React, { Children, createContext, useEffect, useState } from 'react'
import { getCurrentUser, isLoggedIn } from '../auth/index';

export const AuthContext=createContext();

export const AuthProvider = ({ children })=> {
    const [login,setLogin]=useState(false)
    const [user,setUser]=useState(undefined)

    useEffect(()=>{
        setLogin(isLoggedIn());
        setUser(getCurrentUser());
    },[])

    const updateAuthStatus=()=>{
        setLogin(isLoggedIn());
        setUser(getCurrentUser());
    }

  return (
    <AuthContext.Provider value={{login,user,updateAuthStatus}}>
        {children}
    </AuthContext.Provider>
  )
}

