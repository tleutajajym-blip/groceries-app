import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderSuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark" size={60} color="#53B175" />
        </View>
        <Text style={styles.title}>Your Order has been accepted</Text>
        <Text style={styles.subtitle}>Your items has been placped and is on {"\n"}its way to being processed</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.buttonText}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backHomeButton} onPress={() => navigation.navigate('Card')}>
          <Text style={styles.backHomeText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20, justifyContent: 'space-between' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  iconContainer: { width: 100, height: 100, backgroundColor: '#E8F5E9', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#181725', textAlign: 'center', marginBottom: 15 },
  subtitle: { fontSize: 16, color: '#7C7C7C', textAlign: 'center', lineHeight: 22 },
  footer: { paddingVertical: 20, width: '100%' },
  button: { backgroundColor: '#53B175', height: 67, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  backHomeButton: { height: 50, justifyContent: 'center', alignItems: 'center' },
  backHomeText: { color: '#181725', fontSize: 18, fontWeight: '600' },
});