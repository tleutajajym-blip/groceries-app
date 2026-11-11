
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import SplashScreen from './src/screens/auth/SplashScreen';
import OnboardingScreen from './src/screens/auth/OnboardingScreen';
import SignInScreen from './src/screens/auth/SignInScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import VerificationScreen from './src/screens/auth/VerificationScreen';

// Cart Screens
import CardScreen from './src/screens/cart/CardScreen';
import ChecoutScreen from './src/screens/cart/ChecoutScreen';
import PaymentScreen from './src/screens/cart/PaymentScreen';
import OrderSuccessScreen from './src/screens/cart/OrderSuccessScreen';
import OrdersScreen from './src/screens/cart/OrdersScreen';

// User Screens
import AddressScreen from './src/screens/user/AddressScreen';
import LocationScreen from './src/screens/user/LocationScreen';
import NotificationScreen from './src/screens/user/NotificationScreen';
import ProfileScreen from './src/screens/user/ProfileScreeb';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
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
