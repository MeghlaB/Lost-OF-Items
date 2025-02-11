import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase_init'
import axios from 'axios';


const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  const creatUser = (email, passWord) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, passWord)
  }

  const loginuser = (email, passWord) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, passWord)
  }

  const UpdateProfile = (updateData) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updateData)
  }

  const GoogleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const Unsubscribed = onAuthStateChanged(auth, async (currentUser) => {
      console.log('CurrentUser-->', currentUser)
      if (currentUser?.email) {
        setUser(currentUser);
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            { email: currentUser.email },{
              withCredentials:true
            }
          );
          // console.log('JWT Token:', data);
        } catch (error) {
          console.error('JWT fetch error:', error);
        }
      } else {
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/logout`,{},
            {
              withCredentials:true
            }
            
          );
          setUser(null); 
          console.log('JWT Token:', data);
        } catch (error) {
          console.error('JWT fetch error:', error);
        }
        // setUser(null); 
      }
      setLoading(false);
    })
    return () => [
      Unsubscribed()
    ]
  }, [user])












  const userInfo = {
    user,
    loading,
    setUser,
    setLoading,
    creatUser,
    loginuser,
    GoogleLogin,
    logout,
    UpdateProfile
  }



  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}
