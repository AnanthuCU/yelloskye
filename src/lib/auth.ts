// lib/auth.ts
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged,
    User,
  } from 'firebase/auth';
  import { auth } from './firebase';
  
  export const signup = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const login = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  
  export const logout = async () => {
    return await signOut(auth);
  };
  
  export const resetPassword = async (email: string) => {
    return await sendPasswordResetEmail(auth, email);
  };
  
  // Callback to track user state (e.g., in a context or hook)
  export const listenToAuthChanges = (
    callback: (user: User | null) => void
  ) => {
    return onAuthStateChanged(auth, callback);
  };
  