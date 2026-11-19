import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const EXCLUSIVE_OFFERS = [
  {
    id: "1",
    name: "Organic Bananas",
    unit: "7pcs, Priceg",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
  },
  {
    id: "2",
    name: "Red Apple",
    unit: "1kg, Priceg",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
  },
];

const BEST_SELLING = [
  {
    id: "3",
    name: "Bell Pepper Red",
    unit: "1kg, Priceg",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400",
  },
  {
    id: "4",
    name: "Ginger",
    unit: "250gm, Priceg",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400",
  },
];

const GROCERIES = [
  {
    id: "5",
    name: "Beef Bone",
    unit: "1kg, Priceg",
    price: "$4.99",
    bg: "#FDE8E4",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400",
  },
  {
    id: "6",
    name: "Broiler Chicken",
    unit: "1kg, Priceg",
    price: "$4.99",
    bg: "#E7F5EC",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400",
  },
];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState({});

  const addItem = (id) => {
    setCartCount((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const renderProductCard = (item, showBg = false) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.card, showBg && item.bg ? { backgroundColor: item.bg, borderColor: "transparent" } : null]}
      activeOpacity={0.85}
      onPress={() => navigation?.navigate?.("ProductDetails", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.productName} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.productUnit}>{item.unit}</Text>
      <View style={styles.cardBottom}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addItem(item.id)}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>
            {cartCount[item.id] ? `${cartCount[item.id]}` : "+"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header Logo & Location */}
        <View style={styles.header}>
          <Text style={styles.carrot}>🥕</Text>
          <View style={styles.locationRow}>
            <Text style={styles.pin}>📍</Text>
            <Text style={styles.locationText}>Dhaka, Banassre</Text>
          </View>
        </View>

        {/* Search Bar */}
        <TouchableOpacity
          style={styles.searchBox}
          activeOpacity={0.9}
          onPress={() => navigation?.navigate?.("Search", { initialQuery: search })}
        >
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            value={search}
            onChangeText={setSearch}
          />
        </TouchableOpacity>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800" }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.bannerOverlay} />
          <View style={styles.bannerTextWrap}>
            <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
            <Text style={styles.bannerSubtitle}>Get Up To 40% OFF</Text>
          </View>
        </View>

        {/* Exclusive Offer */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity onPress={() => navigation?.navigate?.("Explore")}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {EXCLUSIVE_OFFERS.map((item) => renderProductCard(item))}
        </ScrollView>

        {/* Best Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity onPress={() => navigation?.navigate?.("Explore")}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {BEST_SELLING.map((item) => renderProductCard(item))}
        </ScrollView>

        {/* Groceries */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <TouchableOpacity onPress={() => navigation?.navigate?.("Categories")}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {GROCERIES.map((item) => renderProductCard(item, true))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContent: { paddingBottom: 30 },
  header: { alignItems: "center", paddingTop: 16, paddingBottom: 10 },
  carrot: { fontSize: 28, marginBottom: 4 },
  locationRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  pin: { fontSize: 14 },
  locationText: { fontSize: 16, fontWeight: "600", color: "#4C4F4D" },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    marginHorizontal: 20,
    borderRadius: 15,
    paddingHorizontal: 14,
    height: 50,
    marginTop: 8,
    marginBottom: 18,
  },
  searchIcon: { fontSize: 16, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 15, color: "#181725" },
  banner: {
    marginHorizontal: 20,
    height: 115,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "center",
    marginBottom: 24,
  },
  bannerImage: { ...StyleSheet.absoluteFillObject, width: "100%", height: "100%" },
  bannerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.28)" },
  bannerTextWrap: { paddingLeft: 120 },
  bannerTitle: { fontSize: 20, fontWeight: "700", color: "#FFFFFF" },
  bannerSubtitle: { fontSize: 13, fontWeight: "600", color: "#53B175", marginTop: 4 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 14,
    marginTop: 6,
  },
  sectionTitle: { fontSize: 22, fontWeight: "700", color: "#181725" },
  seeAll: { fontSize: 15, fontWeight: "600", color: "#53B175" },
  horizontalList: { paddingHorizontal: 20, gap: 14, paddingBottom: 12 },
  card: {
    width: 168,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    padding: 14,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  cardImage: { width: "100%", height: 85, marginBottom: 12 },
  productName: { fontSize: 16, fontWeight: "700", color: "#181725" },
  productUnit: { fontSize: 13, color: "#7C7C7C", marginTop: 3, marginBottom: 14 },
  cardBottom: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: 17, fontWeight: "700", color: "#181725" },
  addButton: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: { color: "#FFFFFF", fontSize: 22, fontWeight: "600" },
});