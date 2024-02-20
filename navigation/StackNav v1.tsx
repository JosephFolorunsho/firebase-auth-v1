import { ActivityIndicator, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthContext } from "../AuthContext";
import HomeNav from "./HomeNav";
import AuthNav from "./authNav";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../FIrebaseConfig";

const StackNav = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  function stateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = FIREBASE_AUTH.onAuthStateChanged(stateChanged);
    return subscriber;
  }, []);

  if (loading) {
    return <ActivityIndicator size={25} color={"#0000ff"} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {user ? <HomeNav /> : <AuthNav />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
