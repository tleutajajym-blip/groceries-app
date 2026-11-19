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

const ITEMS = [
  {
    id: "1",
    name: "Diet Coke",
    unit: "355ml, Price",
    price: "$1.99",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
  },
  {
    id: "2",
    name: "Sprite Can",
    unit: "325ml, Price",
    price: "$1.50",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400",
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
    name: "Orange Juice",
    unit: "2L, Price",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400",
  },
];

export default function CategoriesScreen({ route, navigation }) {
  const categoryTitle = route?.params?.category || "Beverages";
  const [counts, setCounts] = useState({});

  const addToCart = (id) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.iconBtn}>
          <Text style={styles.iconText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{categoryTitle}</Text>
        <TouchableOpacity
          onPress={() => navigation?.navigate?.("Search")}
          style={styles.iconBtn}
        >
          <Text style={styles.filterIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation?.navigate?.("ProductDetails", { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <Text style={styles.name} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={styles.unit}>{item.unit}</Text>
            <View style={styles.bottom}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.addBtn} onPress={() => addToCart(item.id)}>
                <Text style={styles.addText}>{counts[item.id] ? counts[item.id] : "+"}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingTop: 14 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginBottom: 16,
  },
  iconBtn: { width: 36, height: 36, justifyContent: "center", alignItems: "center" },
  iconText: { fontSize: 28, color: "#181725", fontWeight: "500" },
  filterIcon: { fontSize: 20, color: "#181725" },
  title: { fontSize: 19, fontWeight: "700", color: "#181725" },
  list: { paddingHorizontal: 18, paddingBottom: 30 },
  row: { justifyContent: "space-between", marginBottom: 14 },
  card: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    padding: 14,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  image: { width: "100%", height: 85, marginBottom: 10 },
  name: { fontSize: 15, fontWeight: "700", color: "#181725" },
  unit: { fontSize: 13, color: "#7C7C7C", marginTop: 4, marginBottom: 12 },
  bottom: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: 16, fontWeight: "700", color: "#181725" },
  addBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: { color: "#FFFFFF", fontSize: 20, fontWeight: "600" },
});