import React, { useEffect, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import * as S from "./InitialPage.style";

const likeIcon = require("../../../assets/icons/like.png");

const InitialPage = ({ navigation }) => {
  const rotation = new Animated.Value(0);
  const [showExtraText, setShowExtraText] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();

    setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);

    setTimeout(() => {
      setShowExtraText(true);
    }, 6000);
  }, []);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <S.Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <S.RotateImage
          source={likeIcon}
          style={{ transform: [{ rotate: rotateInterpolate }] }}
        />
      </TouchableOpacity>

      <S.TextMock>
        Seja bem-vindo ao teste técnico do {"\n"}Gilliard Rodrigues!
        {"\n"}Espero que goste! :){" "}
      </S.TextMock>

      {showExtraText && (
        <S.ExtraText>Clique no coração para prosseguir</S.ExtraText>
      )}
    </S.Container>
  );
};

export default InitialPage;
