import React, { useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SignInScreen from "./screens/SignInScreen";
export default function App() {
  const [page, setPage] = useState(0);
  if (page === 0) {
    return (
      <div onClick={() => setPage(1)}>
        <SplashScreen />
      </div>
    );
  }
  if (page === 1) {
    return (
      <div onClick={() => setPage(2)}>
        <OnboardingScreen />
      </div>
    );
  }
  return <SignInScreen />;
}