import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./ContentDetail.style";
import PageHeader from "../../components/PageHeader/PageHeader";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";

const ContentDetail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <PageHeader />
        <S.ImageContentThumb
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Emilia_Clarke_Dior.png/640px-Emilia_Clarke_Dior.png",
          }}
          resizeMode="cover"
        >
          <S.CloseButtonContainer
            onPress={() => {
              navigation?.goBack();
            }}
          >
            <S.ButtonClose
              source={require("../../../assets/icons/close.png")}
            />
          </S.CloseButtonContainer>
        </S.ImageContentThumb>
        <S.Content>
          <S.Row>
            <S.ContentName>Emilia Clark</S.ContentName>
            <TouchableOpacity
              onPress={() => {
                null;
              }}
            >
              <S.ButtonLike
                source={require("../../../assets/icons/like.png")}
              />
            </TouchableOpacity>
          </S.Row>
          <S.TextMinor>Criado em: 23 de outubro de 1986</S.TextMinor>
          <S.Description>
            Emilia Isobel Euphemia Rose Clarke MBE (Londres, 23 de outubro de
            1986), é uma atriz inglesa. Ela é mais conhecida por sua
            interpretação de Daenerys Targaryen na série de fantasia da HBO Game
            of Thrones (2011–2019), pela qual recebeu indicações para quatro
            Primetime Emmy Awards. Ela também é conhecida por seu papel no filme
            Star Wars Solo: A Star Wars Story (2018) e nos dramas românticos Me
            Before You (2016) e Last Christmas (2019).
          </S.Description>
          <S.RowLikesAndViews>
            <S.TextLikesAndViews>Likes: 10 </S.TextLikesAndViews>
            <S.TextLikesAndViews>Views: 20</S.TextLikesAndViews>
          </S.RowLikesAndViews>

          <CustomButton
            onPress={null}
            text="Assistir"
            backgroundColor="#808C99"
            color="#FFFFFF"
            icon={require("../../../assets/icons/play.png")} // Substitua pelo caminho do ícone
            marginTop={5}
            disabled={false}
            fetching={false}
          />
        </S.Content>
      </S.Container>
    </SafeAreaView>
  );
};

export default ContentDetail;
