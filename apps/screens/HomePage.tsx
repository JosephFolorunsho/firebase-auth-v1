import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { FIREBASE_AUTH } from "../../FIrebaseConfig";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../AuthContext";

const HomePage = () => {
  const auth = FIREBASE_AUTH;
  const { logout, user, token } = useContext(AuthContext);

  console.log("REDUXUSER --z:", user);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <Button title="Sign Out" onPress={() => logout()} />
      <TouchableOpacity style={{ backgroundColor: "#0f22", padding: 7 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
          Get Token
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
    gap: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
