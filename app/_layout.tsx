import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkThemeCustom : LightThemeCustom}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#111" }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: colorScheme === "dark" ? "#0a0a0a" : "#f9fafb",
            },
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </SafeAreaView>
    </ThemeProvider>
  );
}

// Custom Dark and Light Themes
const DarkThemeCustom = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#0a0a0a",
    card: "#121212",
    text: "#ffffff",
    border: "#333333",
    notification: "#0ea5e9",
    primary: "#0ea5e9",
  },
};

const LightThemeCustom = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#f9fafb",
    card: "#ffffff",
    text: "#111827",
    border: "#e5e7eb",
    notification: "#0ea5e9",
    primary: "#0ea5e9",
  },
};
