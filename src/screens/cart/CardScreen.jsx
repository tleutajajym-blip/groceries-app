import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const initialCartItems = [
  { id: '1', name: 'Natural Red Apple', size: '1kg, Price', price: 4.99, quantity: 1 },
  { id: '2', name: 'Organic Bananas', size: '1.5kg, Price', price: 3.00, quantity: 1 },
  { id: '3', name: 'Ginger', size: '250gm, Price', price: 2.99, quantity: 1 },
];

export default function CardScreen({ navigation }) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View style={styles.imagePlaceholder}>
              <Ionicons name="basket-outline" size={28} color="#53B175" />
            </View>
            <View style={styles.itemDetails}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{item.name}</Text>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Ionicons name="close" size={20} color="#B3B3B3" />
                </TouchableOpacity>
              </View>
              <Text style={styles.itemSize}>{item.size}</Text>
              <View style={styles.itemFooter}>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity style={styles.qtyButton} onPress={() => decreaseQuantity(item.id)}>
                    <Ionicons name="remove" size={16} color="#B3B3B3" />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.qtyButton} onPress={() => increaseQuantity(item.id)}>
                    <Ionicons name="add" size={16} color="#53B175" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.checkoutButtonText}>Go to Checkout</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>${totalPrice.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 },
  header: { paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#E2E2E2', alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  cartItem: { flexDirection: 'row', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#E2E2E2', alignItems: 'center' },
  imagePlaceholder: { width: 70, height: 70, backgroundColor: '#F2F3F2', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  itemDetails: { flex: 1 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#181725', flex: 1, marginRight: 10 },
  itemSize: { fontSize: 12, color: '#7C7C7C', marginVertical: 4 },
  itemFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyButton: { width: 35, height: 35, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  qtyText: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 12, color: '#181725' },
  itemPrice: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  footer: { paddingVertical: 20 },
  checkoutButton: { backgroundColor: '#53B175', height: 67, borderRadius: 19, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  checkoutButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', flex: 1, textAlign: 'center', marginLeft: 40 },
  totalBadge: { backgroundColor: '#489E67', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4 },
  totalBadgeText: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
});