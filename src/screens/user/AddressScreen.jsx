
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddressScreen({ navigation }) {
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [zip, setZip] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Address</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.map}>
          <Ionicons name="location" size={55} color="#53B175" />
          <Text style={styles.mapText}>Your Location</Text>
        </View>

        <Text style={styles.heading}>Delivery Address</Text>
        <Text style={styles.description}>
          Enter your delivery details below
        </Text>

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your city"
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.label}>ZIP Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter ZIP code"
          keyboardType="number-pad"
          value={zip}
          onChangeText={setZip}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Address</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },
  map: {
    height: 190,
    backgroundColor: '#F2F8F3',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  mapText: {
    color: '#53B175',
    fontSize: 15,
    marginTop: 8,
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 28,
    color: '#181725',
  },
  description: {
    color: '#7C7C7C',
    marginTop: 8,
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#181725',
  },
  input: {
    height: 52,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    marginBottom: 22,
    fontSize: 15,
  },
  button: {
    height: 58,
    backgroundColor: '#53B175',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
});
