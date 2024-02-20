import {
  ActivityIndicator,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../../AuthContext";
const Login = () => {
  const [email, setEmail] = useState("jviper47@gmail.com");
  const [password, setPassword] = useState("pass1234");

  //context state
  const { login, loading } = useContext(AuthContext);

  const btnLogin = () => {
    login(email, password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <View>
            <TextInput
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email..."
              style={styles.input}
            />
            <TextInput
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password..."
              secureTextEntry
              style={styles.input}
            />
            {loading ? (
              <ActivityIndicator size={"large"} color={"#0000ff"} />
            ) : (
              <>
                <TouchableOpacity
                  onPress={btnLogin}
                  style={[styles.btn, { backgroundColor: "#0096FF" }]}
                >
                  <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn, { backgroundColor: "#088F8F" }]}
                >
                  <Text style={styles.btnText}>Create Account</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
    gap: 20,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  btn: {
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#fff",
  },
  testView: {
    height: 300,
    borderWidth: 1,
    width: "100%",
  },
});
