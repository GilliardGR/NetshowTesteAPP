import styled from "styled-components/native";
import GlobalStyles from "../../GlobalStyles";

export const Container = styled.View`
  flex: 1;
  background-color: ${GlobalStyles.background};
  padding: 15px;
`;

export const CategoryName = styled.Text`
  font-weight: 600;
  font-size: 22px;
  color: ${GlobalStyles.horizontalList.titleColor};
  margin-bottom: 10px;
`;

export const ContentView = styled.View`
  margin-bottom: 30px;
`;

export const ContentImageWrapper = styled.ScrollView`
  flex-direction: row;
  height: 240px;
`;

export const ImageContainer = styled.TouchableOpacity`
  width: 170px;
  height: 100%;
  margin-right: 10px;
  background-color: #ccc;
  border-radius: 10px;
`;

export const CarouselImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ImageText = styled.Text`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: ${GlobalStyles.whiteMain};
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;
