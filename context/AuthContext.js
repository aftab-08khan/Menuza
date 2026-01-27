"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const superAdminEmail = process.env.NEXT_PUBLIC_SUPERADMIN_EMAIL;

        const isSuper = firebaseUser.email === superAdminEmail;

        setUser(firebaseUser);
        setIsSuperAdmin(isSuper);
        setIsAdmin(!isSuper);

        localStorage.setItem("userType", isSuper ? "superadmin" : "admin");
      } else {
        setUser(null);
        setIsSuperAdmin(false);
        setIsAdmin(false);
        localStorage.removeItem("userType");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem("userType");

      const dbName = "firebase-heartbeat-database";
      indexedDB.deleteDatabase(dbName);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        isSuperAdmin,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
