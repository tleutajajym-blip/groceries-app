
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
} from "react-native";

interface LoginScreenProps {
  onContinue: (phone: string) => void;
}

export default function LoginScreen({
  onContinue,
}: LoginScreenProps) {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (phone.length < 10) {
      Alert.alert(
        "Ошибка",
        "Телефон нөмірін дұрыс енгізіңіз!"
      );
      return;
    }

    Keyboard.dismiss();
    onContinue(phone);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.icon}>🛒</Text>

        <Text style={styles.title}>
          Get your groceries
        </Text>

        <Text style={styles.subtitle}>
          with nectar
        </Text>

        <Text style={styles.heading}>
          Login
        </Text>

        <Text style={styles.description}>
          Enter your mobile number to continue
        </Text>

        <Text style={styles.label}>
          Phone Number
        </Text>

        <View style={styles.phoneBox}>
          <Text style={styles.code}>+7</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(value) =>
              setPhone(value.replace(/\D/g, "").slice(0, 10))
            }
            maxLength={10}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Don't have an account?{" "}
          <Text style={styles.signUp}>
            Sign Up
          </Text>
        </Text>

      </View>
    </View>
  );
}

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
    alignItems: "center",
    elevation: 5,
  },

  icon: {
    fontSize: 55,
    marginBottom: 10,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#181725",
    textAlign: "center",
  },

  subtitle: {
    color: "#53B175",
    fontSize: 18,
    marginTop: 5,
  },

  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#181725",
    alignSelf: "flex-start",
    marginTop: 40,
  },

  description: {
    color: "#7C7C7C",
    fontSize: 14,
    alignSelf: "flex-start",
    marginTop: 10,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 25,
    color: "#181725",
  },

  phoneBox: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    width: "100%",
    marginTop: 10,
  },

  code: {
    padding: 12,
    fontWeight: "bold",
    fontSize: 16,
    color: "#181725",
  },

  input: {
    flex: 1,
    padding: 12,
    fontSize: 15,
    color: "#181725",
  },

  button: {
    width: "100%",
    padding: 16,
    marginTop: 35,
    backgroundColor: "#53B175",
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 25,
    fontSize: 13,
    color: "#7C7C7C",
  },

  signUp: {
    color: "#53B175",
    fontWeight: "bold",
  },
});
