import React from "react";
import { ActivityIndicator } from "react-native";
import * as S from "./CustomButton.style";

const CustomButton = ({
  onPress,
  text,
  backgroundColor,
  color,
  icon,
  marginTop,
  disabled,
  fetching,
}) => {
  return (
    <S.Button
      onPress={onPress}
      backgroundColor={disabled || fetching ? "#191C1F" : backgroundColor}
      marginTop={marginTop}
      disabled={disabled || fetching}
    >
      {icon && <S.Icon source={icon} />}
      {fetching ? (
        <ActivityIndicator size="small" />
      ) : (
        <S.ButtonText color={color}>{text}</S.ButtonText>
      )}
    </S.Button>
  );
};

export default CustomButton;
