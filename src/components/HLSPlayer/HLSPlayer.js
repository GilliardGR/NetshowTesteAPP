import React from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";

const HLSPlayer = () => {
  const videoRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: "https://path-to-your-hls-video.m3u8",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300, // Ajuste conforme necessário
  },
});

export default HLSPlayer;
