import { useEffect } from "react";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { Ubuntu_400Regular, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

import "./global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}} />
      <Stack.Screen name="singIn" options={{ headerShown: false }} />
      {/* <Stack.Screen name="singUp" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
