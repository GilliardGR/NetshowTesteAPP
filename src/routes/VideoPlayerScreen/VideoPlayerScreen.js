import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Video } from "expo-av";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { AntDesign } from "@expo/vector-icons"; // Ícone de voltar

const VideoPlayer = () => {
  const route = useRoute();
  const { hlsPath } = route.params;
  const videoRef = React.useRef(null);
  const navigation = useNavigation();
  const [controlsVisible, setControlsVisible] = useState(true);

  const lockScreenOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  };

  const unlockScreenOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  };

  const handleBackPress = () => {
    unlockScreenOrientation();
    navigation.goBack();
  };

  useEffect(() => {
    lockScreenOrientation();

    const unsubscribe = navigation.addListener("beforeRemove", () => {
      unlockScreenOrientation();
    });

    const initialTimeout = setTimeout(() => {
      setControlsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(initialTimeout);
      unsubscribe();
    };
  }, []);

  const handleUserInteraction = () => {
    setControlsVisible(true);

    setTimeout(() => {
      setControlsVisible(false);
    }, 3000);
  };

  return (
    <TouchableWithoutFeedback onPress={handleUserInteraction}>
      <View style={styles.container}>
        {controlsVisible && (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        )}

        <Video
          ref={videoRef}
          source={{ uri: hlsPath }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          style={styles.video}
          useNativeControls
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1,
  },
});

export default VideoPlayer;
