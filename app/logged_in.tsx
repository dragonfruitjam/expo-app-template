import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";

export default function LoggedIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={styles.screen}
    >
      <Image
        source={require('../assets/images/react-logo.png')} 
        style={{width: 180, height: 180, borderRadius: 20}}/>
      <Text style={{
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginTop: 8,
        marginBottom: 24,}}>
        Logged In
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
      alignItems: "center",
      backgroundColor: "#002E2C",
      height: "100%"
  },
  textInput: {
      color: "green",
      justifyContent: "center",
      margin: 5,
      paddingVertical: 8,
      paddingHorizontal: 32,
      borderRadius: 8,
      elevation: 3,
      fontSize: 16,
      backgroundColor: "white",
      width: "80%",
  },
  button: {
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
      paddingVertical: 10,
      paddingHorizontal: 32,
      borderRadius: 50,
      elevation: 3,
      backgroundColor: "crimson",
      width: "50%",
  },
  registerButton: {
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
      paddingVertical: 10,
      paddingHorizontal: 32,
      borderWidth:2,
      borderRadius: 50,
      borderColor: "crimson",
      width: "50%",
  },
  buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
  },
});