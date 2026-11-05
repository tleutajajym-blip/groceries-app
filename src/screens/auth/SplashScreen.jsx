
import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";

interface SplashScreenProps {
  onContinue: () => void;
}

export default function SplashScreen({
  onContinue,
}: SplashScreenProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onContinue();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onContinue]);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#2DA653"
        barStyle="light-content"
      />

      {/* Logo Container */}

      <View style={styles.logoContainer}>

        <View style={styles.logo}>
          <Text style={styles.carrot}>
            🥕
          </Text>

          <Text style={styles.logoText}>
            nectar
          </Text>
        </View>

        <Text style={styles.subtitle}>
          O N L I N E  G R O C E R I E S
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2DA653",
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  carrot: {
    fontSize: 42,
  },

  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -2,
  },

  subtitle: {
    fontSize: 10,
    color: "#FFFFFF",
    marginTop: 2,
    marginLeft: 40,
    letterSpacing: 1,
  },
});
