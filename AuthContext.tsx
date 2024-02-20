import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { FIREBASE_AUTH } from "./FIrebaseConfig";

interface contextProp {
  userToken: any;
  isLoading: boolean | undefined;
}

export const AuthContext = createContext<any | undefined>(undefined);

interface AuthProviderProp {
  children: ReactNode;
}

////////////////////////////////////
export const AuthProvider = ({ children }: AuthProviderProp) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  const auth = FIREBASE_AUTH;

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      const gotUser: any = response.user;
      const accessToken = gotUser.stsTokenManager.accessToken;
      // console.log("RESPONSE:", gotUser.stsTokenManager.accessToken);
      setToken(accessToken);
      AsyncStorage.setItem("userToken", accessToken);
      alert("logged In successfully😁");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setToken(null);
      AsyncStorage.removeItem("userToken");
    } catch (error) {
      console.error(error);
    }
  };

  async function SignUp(email: string, password: string) {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);

      alert("Check your email!");
    } catch (error: any) {
      console.log(error);
      alert("Failed to create User" + error.message);
    }
  }

  async function isLoggedIn() {
    try {
      const asyncToken = await AsyncStorage.getItem("userToken");
      setToken(asyncToken);
    } catch (error) {}
  }

  function stateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }
  useEffect(() => {
    isLoggedIn();
    const subscriber = FIREBASE_AUTH.onAuthStateChanged(stateChanged);
    return subscriber;
  }, []);
  return (
    <AuthContext.Provider
      value={{ login, logout, user, setUser, loading, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
