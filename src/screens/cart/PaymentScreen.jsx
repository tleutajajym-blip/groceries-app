import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Methods</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.cardItem}>
          <Ionicons name="card" size={28} color="#53B175" />
          <Text style={styles.cardNumber}>**** **** **** 3947</Text>
          <Ionicons name="checkmark-circle" size={24} color="#53B175" />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#53B175" />
          <Text style={styles.addText}>Add New Card</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Select Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  content: { flex: 1, marginTop: 20 },
  cardItem: { flexDirection: 'row', alignItems: 'center', padding: 15, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 12, marginBottom: 15 },
  cardNumber: { flex: 1, marginLeft: 15, fontSize: 16, fontWeight: '600', color: '#181725' },
  addButton: { flexDirection: 'row', alignItems: 'center', padding: 15, borderStyle: 'dashed', borderWidth: 1, borderColor: '#53B175', borderRadius: 12, justifyContent: 'center' },
  addText: { marginLeft: 10, fontSize: 16, fontWeight: '600', color: '#53B175' },
  footer: { paddingVertical: 20 },
  button: { backgroundColor: '#53B175', height: 67, borderRadius: 19, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
});