
import React from "react";

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

interface OnboardingScreenProps {
  onContinue: () => void;
}

export default function OnboardingScreen({
  onContinue,
}: OnboardingScreenProps) {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Dark Overlay */}

        <View style={styles.overlay} />

        {/* Main Content */}

        <View style={styles.content}>
          <Text style={styles.logo}>🥕</Text>

          <Text style={styles.title}>
            Welcome{"\n"}
            to our store
          </Text>

          <Text style={styles.description}>
            Get your groceries in as fast as one hour
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={onContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 65,
    alignItems: "center",
  },

  logo: {
    fontSize: 48,
    marginBottom: 15,
  },

  title: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },

  description: {
    fontSize: 15,
    color: "#E0E0E0",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 30,
  },

  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#53B175",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
