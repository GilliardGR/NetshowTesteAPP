import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "px" : "0px")};
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.color};
  font-size: 16px;
`;
