import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./ContentDetail.style";
import PageHeader from "../../components/PageHeader/PageHeader";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";

const ContentDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { thumbnail, title, created_at, description, likes, views, hlsPath } =
    route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <PageHeader />
        <S.ImageContentThumb
          source={{
            uri: thumbnail,
          }}
          resizeMode="contain"
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
            <S.ContentName>{title}</S.ContentName>
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
          <S.TextMinor>Criado em: {created_at}</S.TextMinor>
          <S.Description>{description}</S.Description>
          <S.RowLikesAndViews>
            <S.TextLikesAndViews>Likes: {likes} </S.TextLikesAndViews>
            <S.TextLikesAndViews>Views: {views}</S.TextLikesAndViews>
          </S.RowLikesAndViews>

          <CustomButton
            onPress={hlsPath}
            text="Assistir"
            backgroundColor="#808C99"
            color="#FFFFFF"
            icon={require("../../../assets/icons/play.png")}
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
