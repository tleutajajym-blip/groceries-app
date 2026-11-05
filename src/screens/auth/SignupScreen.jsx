
import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  StatusBar,
  Keyboard,
} from "react-native";

interface SignInScreenProps {
  onContinue: (phone: string) => void;
}

export default function SignInScreen({
  onContinue,
}: SignInScreenProps) {
  const [phone, setPhone] = useState("");

  // Continue Button
  const handleContinue = () => {
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 10) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid phone number."
      );
      return;
    }

    Keyboard.dismiss();

    // Send phone number to VerificationScreen
    onContinue("+880" + cleanPhone);
  };

  // Google Login
  const handleGoogle = () => {
    Alert.alert(
      "Google Login",
      "Google authentication coming soon!"
    );
  };

  // Facebook Login
  const handleFacebook = () => {
    Alert.alert(
      "Facebook Login",
      "Facebook authentication coming soon!"
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >

        {/* Grocery Image */}

        <View style={styles.imageSection}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Main Content */}

        <View style={styles.content}>

          {/* Title */}

          <Text style={styles.title}>
            Get your groceries{"\n"}
            with nectar
          </Text>

          {/* Phone Label */}

          <Text style={styles.label}>
            Phone Number
          </Text>

          {/* Phone Input */}

          <View style={styles.phoneRow}>
            <Text style={styles.flag}>
              🇧🇩
            </Text>

            <Text style={styles.code}>
              +880
            </Text>

            <TextInput
              style={styles.phoneInput}
              placeholder="Enter phone number"
              placeholderTextColor="#AAAAAA"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(value) =>
                setPhone(
                  value.replace(/\D/g, "").slice(0, 11)
                )
              }
              maxLength={11}
              returnKeyType="done"
              onSubmitEditing={handleContinue}
            />
          </View>

          {/* Continue Button */}

          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueText}>
              Continue
            </Text>
          </TouchableOpacity>

          {/* Social Text */}

          <Text style={styles.socialText}>
            Or connect with social media
          </Text>

          {/* Google Button */}

          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogle}
            activeOpacity={0.8}
          >
            <Text style={styles.googleIcon}>
              G
            </Text>

            <Text style={styles.buttonText}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Facebook Button */}

          <TouchableOpacity
            style={styles.facebookButton}
            onPress={handleFacebook}
            activeOpacity={0.8}
          >
            <Text style={styles.facebookIcon}>
              f
            </Text>

            <Text style={styles.buttonText}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* Home Indicator */}

      <View style={styles.homeIndicator} />

    </View>
  );
}

// Styles

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 35,
  },

  imageSection: {
    width: "100%",
    height: 310,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 26,
    lineHeight: 36,
    fontWeight: "bold",
    color: "#181725",
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#181725",
    marginBottom: 8,
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },

  flag: {
    fontSize: 22,
    marginRight: 10,
  },

  code: {
    fontSize: 15,
    color: "#181725",
    marginRight: 12,
    fontWeight: "600",
  },

  phoneInput: {
    flex: 1,
    height: 45,
    fontSize: 15,
    color: "#181725",
  },

  continueButton: {
    width: "100%",
    height: 55,
    backgroundColor: "#53B175",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  socialText: {
    textAlign: "center",
    color: "#828282",
    fontSize: 12,
    marginTop: 28,
    marginBottom: 25,
  },

  googleButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4285F4",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  googleIcon: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    marginRight: 20,
  },

  facebookButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#2D4A9C",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  facebookIcon: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
    marginRight: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },

  homeIndicator: {
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
    width: 110,
    height: 4,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },

});
