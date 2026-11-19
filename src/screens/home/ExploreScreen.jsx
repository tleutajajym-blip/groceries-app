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

const CATEGORIES = [
  {
    id: "1",
    title: "Frash Fruits & Vegetable",
    bg: "#E9F7EF",
    border: "#82E0AA",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400",
  },
  {
    id: "2",
    title: "Cooking Oil & Ghee",
    bg: "#FEF5E7",
    border: "#F8C471",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
  },
  {
    id: "3",
    title: "Meat & Fish",
    bg: "#FDEDEC",
    border: "#F5B7B1",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400",
  },
  {
    id: "4",
    title: "Bakery & Snacks",
    bg: "#F5EEF8",
    border: "#D7BDE2",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
  },
  {
    id: "5",
    title: "Dairy & Eggs",
    bg: "#FEF9E7",
    border: "#F9E79F",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
  },
  {
    id: "6",
    title: "Beverages",
    bg: "#E8F8F5",
    border: "#A3E4D7",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
  },
];

export default function ExploreScreen({ navigation }) {
  const [query, setQuery] = useState("");

  const filtered = CATEGORIES.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Text style={styles.headerTitle}>Find Products</Text>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#7C7C7C"
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.bg, borderColor: item.border }]}
            activeOpacity={0.85}
            onPress={() => navigation?.navigate?.("Categories", { category: item.title })}
          >
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
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
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    marginHorizontal: 20,
    borderRadius: 15,
    paddingHorizontal: 14,
    height: 50,
    marginBottom: 18,
  },
  searchIcon: { fontSize: 16, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 15, color: "#181725" },
  list: { paddingHorizontal: 20, paddingBottom: 30 },
  row: { justifyContent: "space-between", marginBottom: 14 },
  card: {
    width: "48%",
    height: 185,
    borderRadius: 18,
    borderWidth: 1,
    padding: 14,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: { width: 105, height: 85 },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
  },
});