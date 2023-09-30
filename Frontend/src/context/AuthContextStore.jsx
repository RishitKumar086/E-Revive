{/*import React,{useState,createContext} from 'react'

export const AuthContextStore = createContext(null)

function ContextAuth({children}) {
    const[user,setUser]=useState()
    return (
        <AuthContextStore.Provider value={{user,setUser}}>
            {children}
        </AuthContextStore.Provider>
    )
}

export default AuthContextStore*/}
import React, { useState, createContext } from 'react';

export const AuthContextStore = createContext({
  user: null,
  setUser: () => {} // a placeholder function
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <AuthContextStore.Provider value={{ user, setUser }}>
      {children}
    </AuthContextStore.Provider>
  );
}

