import styled from "styled-components/native";
import GlobalStyles from "../../GlobalStyles";
import { ScrollView } from "react-native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${GlobalStyles.background};
  padding: 15px;
`;
export const ImageContentThumb = styled.ImageBackground`
  width: 100%;
  height: 280px;
  /* background-color: red; */
  margin-top: 10px;
  align-items: flex-end;
`;

export const ButtonClose = styled.Image`
  width: 30px;
  height: 30px;
  /* overflow: hidden; */
`;
export const CloseButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius: 30px;
  background-color: ${GlobalStyles.greyMain};
  margin-top: 8px;
  margin-right: 5px;
`;

export const Content = styled.View`
  width: 100%;
  height: 560px;
  /* background-color: red; */
  margin-top: 20px;
`;
export const ContentName = styled.Text`
  font-weight: 500;
  font-size: 25px;
  color: ${GlobalStyles.horizontalList.titleColor};
  width: 90%;
  /* background-color: red; */
`;

export const TextMinor = styled.Text`
  font-size: 16px;
  color: ${GlobalStyles.whiteMain};
  /* width: 20%; */
  margin-top: 5px;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${GlobalStyles.whiteMain};
  /* width: 20%; */
  margin-top: 10px;
`;

export const Row = styled.View`
  width: 100%;
  height: 95px;
  flex-direction: row;
  /* position: relative; */
  /* align-items: flex-start; */
  justify-content: space-between;
  /* background-color: red; */
  align-items: center;
  /* margin-right: -8px; */
  /* padding-right: 10px; */
`;
export const ButtonLike = styled.Image`
  width: 40px;
  height: 40px;
  /* margin-left: 30px; */
`;
export const TextLikesAndViews = styled.Text`
  font-size: 20px;
  color: ${GlobalStyles.whiteMain};
  /* width: 20%; */
  /* margin-top: 20px; */
`;
export const RowLikesAndViews = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  margin-top: 5px;
  /* background-color: red; */
`;
