import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const ALL_PRODUCTS = [
  {
    id: "1",
    name: "Egg Chicken Red",
    unit: "4pcs, Price",
    price: "$1.99",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
  },
  {
    id: "2",
    name: "Egg Chicken White",
    unit: "180g, Price",
    price: "$1.50",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400",
  },
  {
    id: "3",
    name: "Egg Pasta",
    unit: "30gm, Price",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1551462147-ff2905363cbd?w=400",
  },
  {
    id: "4",
    name: "Egg Noodles",
    unit: "2L, Price",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400",
  },
  {
    id: "5",
    name: "Organic Bananas",
    unit: "7pcs, Priceg",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
  },
  {
    id: "6",
    name: "Red Apple",
    unit: "1kg, Priceg",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
  },
];

export default function SearchScreen({ route, navigation }) {
  const [query, setQuery] = useState(route?.params?.initialQuery || "");
  const [counts, setCounts] = useState({});

  const filtered = ALL_PRODUCTS.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.unit.toLowerCase().includes(query.toLowerCase())
  );

  const addItem = (id) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View style={styles.searchHeader}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.backBtn}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            value={query}
            onChangeText={setQuery}
            autoFocus
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery("")}>
              <Text style={styles.clearText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Тауар табылмады</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation?.navigate?.("ProductDetails", { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.unit}>{item.unit}</Text>
            <View style={styles.bottom}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.addBtn} onPress={() => addItem(item.id)}>
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
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 16,
    gap: 8,
  },
  backBtn: { width: 32, height: 40, justifyContent: "center", alignItems: "center" },
  backText: { fontSize: 28, color: "#181725" },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    paddingHorizontal: 12,
    height: 48,
  },
  searchIcon: { fontSize: 15, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 15, color: "#181725" },
  clearText: { fontSize: 14, color: "#7C7C7C", paddingLeft: 6 },
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
  emptyText: { textAlign: "center", color: "#7C7C7C", fontSize: 15, marginTop: 40 },
});