import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import SplashScreen from "./screens/auth/SplashScreen";
import OnboardingScreen from "./screens/auth/OnboardingScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import VerificationScreen from "./screens/auth/VerificationScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ExploreScreen from "./screens/home/ExploreScreen";
import CategoriesScreen from "./screens/home/CategoriesScreen";
import SearchScreen from "./screens/home/SearchScreen";
import ProductDetailsScreen from "./screens/home/ProductDetailsScreen";
import FavouriteScreen from "./screens/home/FavouriteScreen";
import CardScreen from "./screens/cart/CardScreen";
import ChecoutScreen from "./screens/cart/ChecoutScreen";
import PaymentScreen from "./screens/cart/PaymentScreen";
import OrderSuccessScreen from "./screens/cart/OrderSuccessScreen";
import OrdersScreen from "./screens/cart/OrdersScreen";
import AddressScreen from "./screens/user/AddressScreen";
import LocationScreen from "./screens/user/LocationScreen";
import NotificationScreen from "./screens/user/NotificationScreen";
import ProfileScreen from "./screens/user/ProfikeScreeb";

const Stack = createNativeStackNavigator();

const tabs = [
  { route: "Home", label: "Home", icon: "home-outline" },
  { route: "Explore", label: "Explore", icon: "search-outline" },
  { route: "Favourite", label: "Favourites", icon: "heart-outline" },
  { route: "Card", label: "Cart", icon: "cart-outline" },
  { route: "Profile", label: "Profile", icon: "person-outline" },
];

function TabBar({ navigation, activeRoute }) {
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => {
        const active = tab.route === activeRoute;
        return (
          <TouchableOpacity
            key={tab.route}
            style={styles.tabItem}
            onPress={() => {
              if (!active) navigation.navigate(tab.route);
            }}
            accessibilityRole="button"
            accessibilityLabel={tab.label}
          >
            <Ionicons
              name={tab.icon}
              size={22}
              color={active ? "#53B175" : "#7C7C7C"}
            />
            <Text style={[styles.tabLabel, active && styles.activeTabLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function withTabBar(Screen, activeRoute) {
  return function TabbedScreen(props) {
    return (
      <View style={styles.screen}>
        <Screen {...props} />
        <TabBar navigation={props.navigation} activeRoute={activeRoute} />
      </View>
    );
  };
}

const HomeWithTabs = withTabBar(HomeScreen, "Home");
const ExploreWithTabs = withTabBar(ExploreScreen, "Explore");
const FavouriteWithTabs = withTabBar(FavouriteScreen, "Favourite");
const CardWithTabs = withTabBar(CardScreen, "Card");
const ProfileWithTabs = withTabBar(ProfileScreen, "Profile");

function SplashRoute({ navigation }) {
  return <SplashScreen onContinue={() => navigation.replace("Onboarding")} />;
}

function OnboardingRoute({ navigation }) {
  return <OnboardingScreen onContinue={() => navigation.replace("SignIn")} />;
}

function SignupRoute({ navigation }) {
  return (
    <SignupScreen
      onContinue={(phone) => navigation.navigate("Verification", { phone })}
      onLogin={() => navigation.navigate("Login")}
    />
  );
}

function LoginRoute({ navigation }) {
  return (
    <LoginScreen
      onContinue={(phone) => navigation.navigate("Verification", { phone })}
      onSignUp={() => navigation.navigate("SignIn")}
    />
  );
}

function VerificationRoute({ navigation, route }) {
  return (
    <VerificationScreen
      phone={route.params?.phone}
      onVerify={() => navigation.replace("Home")}
      onBack={() => navigation.goBack()}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashRoute} />
        <Stack.Screen name="Onboarding" component={OnboardingRoute} />
        <Stack.Screen name="SignIn" component={SignupRoute} />
        <Stack.Screen name="Login" component={LoginRoute} />
        <Stack.Screen name="Verification" component={VerificationRoute} />
        <Stack.Screen name="Home" component={HomeWithTabs} />
        <Stack.Screen name="Explore" component={ExploreWithTabs} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Favourite" component={FavouriteWithTabs} />
        <Stack.Screen name="Card" component={CardWithTabs} />
        <Stack.Screen name="Checkout" component={ChecoutScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Profile" component={ProfileWithTabs} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFFFFF" },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: 62,
    paddingBottom: 6,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    backgroundColor: "#FFFFFF",
  },
  tabItem: { flex: 1, alignItems: "center", justifyContent: "center", gap: 3 },
  tabLabel: { fontSize: 10, color: "#7C7C7C" },
  activeTabLabel: { color: "#53B175", fontWeight: "700" },
});
