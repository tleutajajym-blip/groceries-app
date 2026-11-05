
import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

import SplashScreen from "./screens/auth/SplashScreen";
import OnboardingScreen from "./screens/auth/OnboardingScreen";
import SignInScreen from "./screens/auth/SignupScreen";
import VerificationScreen from "./screens/auth/VerificationScreen";

export default function App() {
  const [page, setPage] = useState(0);
  const [phone, setPhone] = useState("");

  // SPLASH SCREEN
  if (page === 0) {
    return (
      <SplashScreen
        onContinue={() => setPage(1)}
      />
    );
  }

  // ONBOARDING SCREEN
  if (page === 1) {
    return (
      <OnboardingScreen
        onContinue={() => setPage(2)}
      />
    );
  }

  // SIGN IN SCREEN
  if (page === 2) {
    return (
      <SignInScreen
        onContinue={(phoneNumber) => {
          setPhone(phoneNumber);
          setPage(3);
        }}
      />
    );
  }

  // VERIFICATION SCREEN
  if (page === 3) {
    return (
      <VerificationScreen
        phone={phone}
        onBack={() => setPage(2)}
        onVerify={(code) => {
          console.log("Phone:", phone);
          console.log("Code:", code);

          setPage(4);
        }}
      />
    );
  }

  // WELCOME SCREEN
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.icon}>🎉</Text>

      <Text style={styles.title}>
        Welcome to Nectar!
      </Text>

      <Text style={styles.description}>
        Your phone number:
      </Text>

      <Text style={styles.phone}>
        {phone}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setPage(2)}
      >
        <Text style={styles.buttonText}>
          Continue Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  icon: {
    fontSize: 70,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#181725",
    textAlign: "center",
  },

  description: {
    fontSize: 15,
    color: "#7C7C7C",
    marginTop: 20,
  },

  phone: {
    fontSize: 18,
    color: "#53B175",
    fontWeight: "bold",
    marginTop: 10,
  },

  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#53B175",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
