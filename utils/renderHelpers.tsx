import { Text, Image, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
import { WebView } from "react-native-webview";
import React from "react";

const { width } = Dimensions.get("window");

export const renderBlock = (block, idx) => {
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
        source={typeof block.uri === "string" ? { uri: block.uri } : block.uri}
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

export const renderSection = (label, contentBlock) => (
  <React.Fragment key={label}>
    <Text style={styles.sectionTitle}>{label}</Text>
    {contentBlock.content.map(renderBlock)}
  </React.Fragment>
);

const styles = StyleSheet.create({
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#ffffff",
    paddingLeft: 12,
  },
});
