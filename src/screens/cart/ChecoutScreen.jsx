import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChecoutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionLabel}>Delivery Address</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Select Method</Text>
          <Ionicons name="chevron-forward" size={20} color="#181725" />
        </TouchableOpacity>

        <Text style={styles.sectionLabel}>Payment</Text>
        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Payment')}>
          <Ionicons name="card-outline" size={24} color="#F37A20" />
          <Text style={styles.rowTextPayment}>**** **** **** 3947</Text>
          <Ionicons name="chevron-forward" size={20} color="#181725" />
        </TouchableOpacity>

        <Text style={styles.sectionLabel}>Total Cost</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>$10.98</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderSuccess')}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  content: { flex: 1, marginTop: 10 },
  sectionLabel: { fontSize: 16, color: '#7C7C7C', marginBottom: 8, marginTop: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  rowText: { fontSize: 16, fontWeight: '600', color: '#181725' },
  rowTextPayment: { flex: 1, marginLeft: 15, fontSize: 16, fontWeight: '600', color: '#181725' },
  footer: { paddingVertical: 20 },
  button: { backgroundColor: '#53B175', height: 67, borderRadius: 19, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
});