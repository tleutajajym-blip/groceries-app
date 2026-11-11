import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ordersList = [
  { id: '1', orderNo: '#18293', date: '2026-11-11', status: 'Delivered', price: '$13.97' },
  { id: '2', orderNo: '#18294', date: '2026-11-10', status: 'Processing', price: '$8.50' },
];

export default function OrdersScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Orders</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={ordersList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <View style={styles.rowHeader}>
              <Text style={styles.orderNo}>Order {item.orderNo}</Text>
              <Text style={[styles.status, { color: item.status === 'Delivered' ? '#53B175' : '#F37A20' }]}>
                {item.status}
              </Text>
            </View>
            <Text style={styles.date}>Date: {item.date}</Text>
            <View style={styles.rowFooter}>
              <Text style={styles.priceLabel}>Total:</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  orderCard: { padding: 15, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 12, marginBottom: 15 },
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  orderNo: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  status: { fontSize: 14, fontWeight: '600' },
  date: { fontSize: 13, color: '#7C7C7C', marginBottom: 10 },
  rowFooter: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#F2F2F2', paddingTop: 10 },
  priceLabel: { fontSize: 15, color: '#7C7C7C' },
  price: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
});