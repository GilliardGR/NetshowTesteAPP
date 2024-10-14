import { Animated } from "react-native";

import styled from "styled-components/native";
import GlobalStyles from "../../GlobalStyles";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${GlobalStyles.background};
`;

export const RotateImage = styled(Animated.Image)`
  width: 48px;
  height: 48px;
`;

export const TextMock = styled.Text`
  font-weight: 400;
  font-size: 20px;
  color: #b8bfc6;
  margin-top: 30px;
  text-align: center;
`;
export const ExtraText = styled.Text`
  font-size: 16px;
  color: #b8bfc6;
  margin-top: 20px;
  text-align: center;
`;
