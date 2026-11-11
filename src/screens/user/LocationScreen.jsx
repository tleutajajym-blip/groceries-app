
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LocationScreen({ navigation }) {
  const [location, setLocation] = useState('Almaty, Kazakhstan');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.title}>Location</Text>
        <View style={{ width: 26 }} />
      </View>

      <View style={styles.map}>
        <View style={styles.mapCircle}>
          <Ionicons name="location" size={42} color="#FFFFFF" />
        </View>
        <Text style={styles.mapLabel}>Your current location</Text>
      </View>

      <Text style={styles.heading}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Choose your location to find nearby grocery stores.
      </Text>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={22} color="#7C7C7C" />
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Enter your location"
        />
      </View>

      <TouchableOpacity style={styles.currentLocation}>
        <Ionicons name="locate" size={23} color="#53B175" />
        <Text style={styles.currentText}>Use Current Location</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm Location</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },
  map: {
    height: 280,
    backgroundColor: '#EAF5EC',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  mapCircle: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapLabel: {
    marginTop: 15,
    color: '#53B175',
    fontSize: 15,
    fontWeight: '600',
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#181725',
    marginTop: 28,
  },
  subtitle: {
    color: '#7C7C7C',
    fontSize: 14,
    marginTop: 9,
    lineHeight: 21,
  },
  searchBox: {
    height: 55,
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 25,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },
  currentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  currentText: {
    color: '#53B175',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
  },
  button: {
    height: 58,
    backgroundColor: '#53B175',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
});
