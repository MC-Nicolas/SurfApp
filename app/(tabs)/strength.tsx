import { View, Text, StyleSheet } from "react-native";

export default function StrengthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Placeholder : Renforcement Musculaire pour Surf
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0ea5e9",
  },
});
