import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthContext } from "../AuthContext";
import HomeNav from "./HomeNav";
import AuthNav from "./authNav";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../FIrebaseConfig";

const StackNav = () => {
  const { user, setUser, loading, token } = useContext(AuthContext);

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <ActivityIndicator size={"large"} color={"#0000ff"} />;
  //     </View>
  //   );
  // }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle={"dark-content"} />
        {token ? <HomeNav /> : <AuthNav />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
