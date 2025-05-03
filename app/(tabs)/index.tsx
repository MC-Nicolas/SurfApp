import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { MANEUVERS_DATA } from "@/data/maneuvers";
import * as Haptics from "expo-haptics";

export default function SurfScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const router = useRouter();

  return (
    <FlatList
      data={MANEUVERS_DATA}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 100,
        backgroundColor: isDark ? "#0a0a0a" : "#f9fafb",
      }}
      ListHeaderComponent={
        <Text
          style={[styles.header, { color: isDark ? "#ffffff" : "#111827" }]}
        >
          Manœuvres de Surf
        </Text>
      }
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[
            styles.card,
            {
              backgroundColor: isDark ? "#1f1f1f" : "#ffffff",
              shadowColor: isDark ? "#000000" : "#aaa",
            },
          ]}
          activeOpacity={0.9}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

            router.push({
              pathname: "/maneuver/[id]",
              params: { id: index.toString() },
            });
          }}
        >
          <Image source={item.gif} style={styles.image} resizeMode="cover" />
          <View style={styles.textContainer}>
            <Text
              style={[styles.title, { color: isDark ? "#ffffff" : "#0ea5e9" }]}
            >
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
  },
  card: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 5,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 16,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});
