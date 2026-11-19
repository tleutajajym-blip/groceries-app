
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import SplashScreen from './screens/auth/SplashScreen';
import OnboardingScreen from './screens/auth/OnboardingScreen';
import SignInScreen from './screens/auth/SignupScreen';
import LoginScreen from './screens/auth/LoginScreen';
import VerificationScreen from './screens/auth/VerificationScreen';

// Home Screens
import HomeScreen from './screens/home/HomeScreen';
import ExploreScreen from './screens/home/ExploreScreen';
import CategoriesScreen from './screens/home/CategoriesScreen';
import SearchScreen from './screens/home/SearchScreen';
import ProductDetailsScreen from './screens/home/ProductDetailsScreen';
import FavouriteScreen from './screens/home/FavouriteScreen';

// Cart Screens
import CardScreen from './screens/cart/CardScreen';
import ChecoutScreen from './screens/cart/ChecoutScreen';
import PaymentScreen from './screens/cart/PaymentScreen';
import OrderSuccessScreen from './screens/cart/OrderSuccessScreen';
import OrdersScreen from './screens/cart/OrdersScreen';

// User Screens
import AddressScreen from './screens/user/AddressScreen';
import LocationScreen from './screens/user/LocationScreen';
import NotificationScreen from './screens/user/NotificationScreen';
import ProfileScreen from './screens/user/ProfikeScreeb';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {/* Home */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />

        {/* Auth */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />

        {/* Cart */}
        <Stack.Screen name="Card" component={CardScreen} />
        <Stack.Screen name="Checkout" component={ChecoutScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />

        {/* User */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
