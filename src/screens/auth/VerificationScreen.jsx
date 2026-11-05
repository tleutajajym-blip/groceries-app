
import React, { useState, useRef } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
  StatusBar,
} from "react-native";

export default function VerificationScreen({
  phone = "+880 777 123 4567",
  onVerify,
  onBack,
}) {
  const [code, setCode] = useState(["", "", "", ""]);

  // Correctly initialized refs array
  const inputRefs = useRef([null, null, null, null]);

  // Handle input
  const handleChange = (value, index) => {
    const digit = value.replace(/\D/g, "");

    const newCode = [...code];

    if (digit.length > 1) {
      const digits = digit.slice(0, 4 - index).split("");

      digits.forEach((item, i) => {
        newCode[index + i] = item;
      });

      setCode(newCode);

      const nextIndex = Math.min(index + digits.length, 3);
      inputRefs.current[nextIndex]?.focus();

      return;
    }

    newCode[index] = digit;

    setCode(newCode);

    // Move to next input
    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyPress = (event, index) => {
    if (
      event.nativeEvent.key === "Backspace" &&
      !code[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Verify code
  const handleVerify = () => {
    const verificationCode = code.join("");

    if (verificationCode.length !== 4) {
      Alert.alert(
        "Invalid Code",
        "Please enter your 4-digit verification code."
      );
      return;
    }

    Keyboard.dismiss();

    if (onVerify) {
      onVerify(verificationCode);
    }
  };

  // Resend code
  const handleResend = () => {
    setCode(["", "", "", ""]);

    inputRefs.current[0]?.focus();

    Alert.alert(
      "Verification",
      "A new verification code must be requested."
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F5F5F5"
        barStyle="dark-content"
      />

      <View style={styles.card}>

        {/* Back Button */}

        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        {/* Title */}

        <Text style={styles.title}>
          Enter your 4-digit code
        </Text>

        {/* Description */}

        <Text style={styles.description}>
          Code was sent to {phone}
        </Text>

        {/* Code Inputs */}

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              style={[
                styles.codeInput,
                digit !== "" && styles.activeCodeInput,
              ]}
              value={digit}
              onChangeText={(value) =>
                handleChange(value, index)
              }
              onKeyPress={(event) =>
                handleKeyPress(event, index)
              }
              keyboardType="number-pad"
              maxLength={4}
              selectTextOnFocus
              textAlign="center"
              autoFocus={index === 0}
            />
          ))}
        </View>

        {/* Resend */}

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't receive the code?{" "}
          </Text>

          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendLink}>
              Resend
            </Text>
          </TouchableOpacity>
        </View>

        {/* Verify Button */}

        <TouchableOpacity
          style={styles.button}
          onPress={handleVerify}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Verify
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 20,
    elevation: 5,
  },

  backButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  backText: {
    fontSize: 30,
    color: "#181725",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
    color: "#181725",
  },

  description: {
    color: "#7C7C7C",
    fontSize: 14,
    marginTop: 15,
  },

  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    gap: 10,
  },

  codeInput: {
    flex: 1,
    maxWidth: 60,
    height: 60,
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
    fontSize: 25,
    color: "#181725",
  },

  activeCodeInput: {
    borderBottomColor: "#53B175",
  },

  resendContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 30,
  },

  resendText: {
    color: "#7C7C7C",
    fontSize: 14,
  },

  resendLink: {
    color: "#53B175",
    fontSize: 14,
    fontWeight: "bold",
  },

  button: {
    width: "100%",
    height: 55,
    marginTop: 35,
    backgroundColor: "#53B175",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
