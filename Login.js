import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (email.trim() === "" || password.trim() === "") {
      console.log("Please enter email and password");
      return;
    }

    console.log("Sending login data:", email, password);

    navigation.navigate("Homepage", { paramEmail: email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Facebook Lite</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email/ Number"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} disabled={true}>
          <Text style={styles.optionText}>Forget Password?</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>
          ------------------------------or-------------------------------
        </Text>
        <TouchableOpacity
          style={[styles.optionButton, styles.createNewAccountButton]}
          disabled={true}
        >
          <Text style={styles.optionText1}>Create New Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} disabled={true}>
          <Text style={styles.optionText}>English (US),</Text>
          <Text style={styles.optionText}>Sesotho</Text>
          <Text style={styles.optionText}>More Languages</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  form: {
    width: "80%",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  optionButton: {
    marginBottom: 20,
    marginLeft: "15%",
    alignItems: "center",
    width: "70%",
  },
  createNewAccountButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  optionText: {
    color: "#4267B2",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  optionText1: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  orText: {
    marginBottom: 10,
    color: "#333",
    fontSize: 16,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#4267B2",
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
