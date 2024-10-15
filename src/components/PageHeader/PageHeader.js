import React from "react";
import * as S from "./PageHeader.style";
import { useNavigation } from "@react-navigation/native";

const PageHeader = () => {
  const navigation = useNavigation(); // Hook para navegar de volta
  const goBackButton = require("../../../assets/icons/back.png");

  return (
    <S.Container>
      <S.BackButton
        onPress={() => {
          navigation?.goBack();
        }}
      >
        <S.ButtonIcon source={goBackButton} />
        <S.BackTitle>Voltar</S.BackTitle>
      </S.BackButton>
    </S.Container>
  );
};

export default PageHeader;
