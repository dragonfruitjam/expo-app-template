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
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { writeUserData } from "../modules/database";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            router.replace("/logged_in");
        }
    });
  });

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user.email);
            writeUserData(user.uid, username, email);
        })
        .catch((error) => alert(error.message));
};

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
        Register
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}/>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}/>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}/>
      <Pressable
        style={styles.button}
        onPress={()=>{handleSignUp()}}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>

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