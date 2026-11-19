import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function ProductDetailsScreen({ route, navigation }) {
  const product = route?.params?.product || {
    name: "Naturel Red Apple",
    unit: "1kg, Price",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600",
  };

  const [qty, setQty] = useState(1);
  const [isFav, setIsFav] = useState(false);
  const [detailOpen, setDetailOpen] = useState(true);

  const unitNumericPrice = parseFloat(String(product.price).replace(/[^0-9.]/g, "")) || 4.99;
  const totalPrice = (unitNumericPrice * qty).toFixed(2);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F2F3F2" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Top Hero Image Box */}
        <View style={styles.heroBox}>
          <View style={styles.heroActions}>
            <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.iconBtn}>
              <Text style={styles.iconText}>‹</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Text style={styles.shareText}>⇪</Text>
            </TouchableOpacity>
          </View>

          <Image source={{ uri: product.image }} style={styles.heroImage} resizeMode="contain" />
        </View>

        {/* Body */}
        <View style={styles.body}>
          <View style={styles.titleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.unit}>{product.unit}</Text>
            </View>
            <TouchableOpacity onPress={() => setIsFav(!isFav)} style={styles.favBtn}>
              <Text style={[styles.heart, isFav && styles.heartActive]}>
                {isFav ? "♥" : "♡"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Quantity & Price */}
          <View style={styles.qtyRow}>
            <View style={styles.qtyControls}>
              <TouchableOpacity
                onPress={() => setQty((q) => (q > 1 ? q - 1 : 1))}
                style={styles.qtyBtn}
              >
                <Text style={styles.qtyMinus}>−</Text>
              </TouchableOpacity>

              <View style={styles.qtyBox}>
                <Text style={styles.qtyText}>{qty}</Text>
              </View>

              <TouchableOpacity onPress={() => setQty((q) => q + 1)} style={styles.qtyBtn}>
                <Text style={styles.qtyPlus}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.totalPrice}>${totalPrice}</Text>
          </View>

          <View style={styles.divider} />

          {/* Product Detail Accordion */}
          <TouchableOpacity
            style={styles.accordionHeader}
            onPress={() => setDetailOpen(!detailOpen)}
          >
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Text style={styles.chevron}>{detailOpen ? "⌄" : "›"}</Text>
          </TouchableOpacity>
          {detailOpen && (
            <Text style={styles.detailDesc}>
              Apples are nutritious. Apples may be good for weight loss. Apples may be good for
              your heart. As part of a healthful and varied diet.
            </Text>
          )}

          <View style={styles.divider} />

          {/* Nutritions Row */}
          <View style={styles.metaRow}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={styles.metaRight}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>100gr</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Review Row */}
          <View style={styles.metaRow}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={styles.metaRight}>
              <Text style={styles.stars}>★★★★★</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.ctaButton}
          activeOpacity={0.85}
          onPress={() =>
            navigation?.navigate?.("Card", {
              product: { ...product, quantity: qty },
            })
          }
        >
          <Text style={styles.ctaText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scroll: { paddingBottom: 24 },
  heroBox: {
    backgroundColor: "#F2F3F2",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 14,
    paddingBottom: 28,
    paddingHorizontal: 18,
  },
  heroActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBtn: { width: 38, height: 38, justifyContent: "center", alignItems: "center" },
  iconText: { fontSize: 30, color: "#181725" },
  shareText: { fontSize: 20, color: "#181725", fontWeight: "600" },
  heroImage: { width: "100%", height: 190, marginTop: 8 },
  body: { paddingHorizontal: 20, paddingTop: 22 },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: { fontSize: 24, fontWeight: "700", color: "#181725" },
  unit: { fontSize: 15, color: "#7C7C7C", marginTop: 4 },
  favBtn: { padding: 4 },
  heart: { fontSize: 26, color: "#7C7C7C" },
  heartActive: { color: "#E74C3C" },
  qtyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 22,
  },
  qtyControls: { flexDirection: "row", alignItems: "center", gap: 12 },
  qtyBtn: { width: 36, height: 36, justifyContent: "center", alignItems: "center" },
  qtyMinus: { fontSize: 24, color: "#7C7C7C" },
  qtyPlus: { fontSize: 24, color: "#53B175" },
  qtyBox: {
    width: 44,
    height: 44,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: { fontSize: 18, fontWeight: "700", color: "#181725" },
  totalPrice: { fontSize: 22, fontWeight: "700", color: "#181725" },
  divider: { height: 1, backgroundColor: "#E2E2E2", marginVertical: 14 },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#181725" },
  chevron: { fontSize: 22, color: "#181725" },
  detailDesc: {
    fontSize: 13,
    lineHeight: 20,
    color: "#7C7C7C",
    marginTop: 10,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metaRight: { flexDirection: "row", alignItems: "center", gap: 10 },
  badge: {
    backgroundColor: "#EBEBEB",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: { fontSize: 11, fontWeight: "600", color: "#7C7C7C" },
  stars: { fontSize: 15, color: "#F3603F", letterSpacing: 2 },
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