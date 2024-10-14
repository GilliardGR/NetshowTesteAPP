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
  height: 40px;
  width: 40px;
  border-radius: 30px;
  background-color: ${GlobalStyles.greyMain};
  margin-top: 8px;
  margin-right: 8px;
`;

export const Content = styled.View`
  width: 100%;
  height: 40%;
  /* background-color: red; */
  margin-top: 20px;
`;
export const ContentName = styled.Text`
  font-weight: 600;
  font-size: 25px;
  color: ${GlobalStyles.horizontalList.titleColor};
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
  height: 50px;
  flex-direction: row;
  /* align-items: flex-start; */
  justify-content: space-between;
  /* background-color: red; */
  align-items: center;
  padding-right: 8px;
`;
export const ButtonLike = styled.Image`
  width: 45px;
  height: 45px;
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
