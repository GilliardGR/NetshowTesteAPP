import styled from "styled-components";
import GlobalStyles from "../../GlobalStyles";

export const Container = styled.View`
  height: 5%;
  /* background-color: ${GlobalStyles.greyMain}; */
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* padding-left: 20px; */
`;
export const ButtonIcon = styled.Image`
  width: 25px;
  height: 25px;
  overflow: hidden;
`;
export const BackButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-left: 20px; */
`;
export const BackTitle = styled.Text`
  font-size: 18px;
  color: #b8bfc6;
  padding-left: 10px;
`;
