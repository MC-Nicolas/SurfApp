import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { paddingBottom: 5, height: 60 },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "ellipse-outline";

          if (route.name === "index") {
            iconName = focused ? "water" : "water-outline";
          } else if (route.name === "strength") {
            iconName = focused ? "fitness" : "fitness-outline";
          }

          return (
            <Ionicons
              name={iconName as keyof typeof Ionicons.glyphMap}
              size={size}
              color={color}
            />
          );
        },
        tabBarButton: (props) => {
          const { onPress, ...rest } = props;
          return (
            <TouchableOpacity
              {...rest}
              delayLongPress={undefined}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                onPress?.();
              }}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Surf" }} />
      <Tabs.Screen name="surfskate" options={{ title: "SurfSkate" }} />
      <Tabs.Screen name="strength" options={{ title: "Renforcement" }} />
    </Tabs>
  );
}
