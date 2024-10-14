import React from "react";
import * as S from "./PageHeader.style";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PageHeader = () => {
  const navigation = useNavigation(); // Hook para navegar de volta

  return (
    <S.Container>
      <S.BackButton
        onPress={() => {
          navigation?.goBack();
        }}
      >
        <S.ButtonIcon source={require("../../../assets/icons/back.png")} />
        <S.BackTitle>Voltar</S.BackTitle>
      </S.BackButton>
    </S.Container>
  );
};

export default PageHeader;
