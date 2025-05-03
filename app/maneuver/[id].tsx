import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { Video } from "expo-av";
import { MANEUVERS_DATA, MANEUVERS_SIDE } from "@/data/maneuvers";
import * as Haptics from "expo-haptics";

const { width } = Dimensions.get("window");

export default function ManeuverDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const maneuver = MANEUVERS_DATA[parseInt(id!)];

  if (!maneuver) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Manœuvre non trouvée</Text>
        </View>
      </SafeAreaView>
    );
  }

  const renderBlock = (block: any, idx: number) => {
    if (block.type === "text") {
      return (
        <Text key={idx} style={styles.text}>
          {block.content}
        </Text>
      );
    }
    if (block.type === "gif") {
      return (
        <Image
          key={idx}
          source={
            typeof block.uri === "string" ? { uri: block.uri } : block.uri
          }
          style={styles.media}
          resizeMode="cover"
        />
      );
    }
    if (block.type === "video" && block.source) {
      return (
        <Video
          key={idx}
          source={block.source}
          style={styles.media}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      );
    }
    if (block.type === "video" && block.url) {
      const embedUrl = block.url.replace("watch?v=", "embed/");
      return (
        <WebView
          key={idx}
          style={styles.media}
          javaScriptEnabled
          source={{ uri: embedUrl }}
        />
      );
    }
    return null;
  };

  const renderSection = (label: string, contentBlock: any) => (
    <View key={label} style={styles.section}>
      <Text style={styles.sectionTitle}>{label}</Text>
      {contentBlock.content.map(renderBlock)}
    </View>
  );

  const frontside = maneuver.content.find(
    (c) => c.type === MANEUVERS_SIDE.FRONTSIDE
  );
  const backside = maneuver.content.find(
    (c) => c.type === MANEUVERS_SIDE.BACKSIDE
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{maneuver.title}</Text>
        {frontside && renderSection("Frontside", frontside)}
        {backside && renderSection("Backside", backside)}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.back();
          }}
        >
          <Text style={styles.backButtonText}>← Retour</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 32,
    textAlign: "center",
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#ffffff",
    paddingLeft: 12,
  },
  text: {
    fontSize: 16,
    color: "#e5e5e5",
    lineHeight: 26,
    marginBottom: 16,
    backgroundColor: "#1a1a1a",
    padding: 12,
    borderRadius: 8,
  },
  media: {
    width: width - 40,
    height: (width - 40) * 0.5625,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 24,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#111",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "#ffffff11",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
