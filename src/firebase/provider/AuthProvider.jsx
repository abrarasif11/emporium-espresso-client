import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email , password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth , email, password);
    }

    const authInfo = {
      user,
      loader,
      createUser
    };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
