import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const INITIAL_FAVOURITES = [
  {
    id: "1",
    name: "Sprite Can",
    unit: "325ml, Price",
    price: "$1.50",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400",
  },
  {
    id: "2",
    name: "Diet Coke",
    unit: "355ml, Price",
    price: "$1.99",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    unit: "2L, Price",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
  },
  {
    id: "4",
    name: "Coca Cola Can",
    unit: "325ml, Price",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400",
  },
];

export default function FavouriteScreen({ navigation }) {
  const [items, setItems] = useState(INITIAL_FAVOURITES);

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Text style={styles.headerTitle}>Favourite</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Таңдаулы тауарлар тізімі бос</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.row}
            activeOpacity={0.8}
            onPress={() => navigation?.navigate?.("ProductDetails", { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.unit}>{item.unit}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.arrowBtn}>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.ctaButton}
          activeOpacity={0.85}
          onPress={() => navigation?.navigate?.("Card")}
        >
          <Text style={styles.ctaText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingTop: 18 },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  list: { paddingHorizontal: 20, paddingVertical: 10 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  image: { width: 52, height: 52, marginRight: 16 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "700", color: "#181725" },
  unit: { fontSize: 13, color: "#7C7C7C", marginTop: 4 },
  price: { fontSize: 16, fontWeight: "700", color: "#181725", marginRight: 10 },
  arrowBtn: { padding: 4 },
  arrow: { fontSize: 24, color: "#181725" },
  separator: { height: 1, backgroundColor: "#E2E2E2" },
  emptyText: { textAlign: "center", color: "#7C7C7C", fontSize: 15, marginTop: 60 },
  footer: { paddingHorizontal: 20, paddingVertical: 14, backgroundColor: "#FFFFFF" },
  ctaButton: {
    height: 60,
    backgroundColor: "#53B175",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  ctaText: { color: "#FFFFFF", fontSize: 17, fontWeight: "700" },
});