import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./ContentDetail.style";
import PageHeader from "../../components/PageHeader/PageHeader";
import { TouchableOpacity } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import formatDate from "../../utils/content.utils";
import { increaseLike, increaseView } from "../../services/API";
import { VideoLikesContext } from "../../context/VideoLikesContext";
import { useVideoViews } from "../../context/VideoViewsContext";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";

const heartLike = require("../../../assets/icons/heart.png");
const heartDeslike = require("../../../assets/icons/broken-heart.png");
const closeIcon = require("../../../assets/icons/close.png");
const playIcon = require("../../../assets/icons/play.png");

const ContentDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { videoViews, updateViews } = useVideoViews();
  const { videosLikes, updateLikes } = useContext(VideoLikesContext);

  const {
    thumbnail,
    title,
    created_at,
    description,
    likes: initialLikes,
    views: initialViews,
    hlsPath,
    videoId,
  } = route.params;

  const [likes, setLikes] = useState(videosLikes[videoId] || initialLikes);
  const [viewCount, setViewCount] = useState(initialViews || 0);

  const formattedDate = formatDate(created_at);

  const handleLikePress = async () => {
    try {
      const updatedVideo = await increaseLike(videoId);
      setLikes(updatedVideo.likes);
      updateLikes(videoId, updatedVideo.likes);
    } catch (e) {
      console.error("Erro ao atualizar o like", e);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const incrementViewCount = async () => {
        try {
          const updatedVideo = await increaseView(videoId, viewCount);

          if (updatedVideo && updatedVideo.views !== null) {
            setViewCount(updatedVideo.views);
            updateViews(videoId, updatedVideo.views);
          } else {
            console.warn("Views retornadas da API são nulas");
          }
        } catch (e) {
          console.error("Erro ao atualizar as visualizações", e);
        }
      };

      incrementViewCount();
    }, [videoId])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <PageHeader />
        <S.ImageContentThumb source={{ uri: thumbnail }} resizeMode="contain">
          <S.CloseButtonContainer onPress={() => navigation.pop()}>
            <S.ButtonClose source={closeIcon} />
          </S.CloseButtonContainer>
        </S.ImageContentThumb>
        <S.Content>
          <S.Row>
            <S.ContentName>{title}</S.ContentName>
            <TouchableOpacity onPress={handleLikePress}>
              <S.ButtonLike source={likes === 0 ? heartLike : heartDeslike} />
            </TouchableOpacity>
          </S.Row>
          <S.TextMinor>Criado em: {formattedDate}</S.TextMinor>
          <S.Description>{description}</S.Description>
          <S.RowLikesAndViews>
            <S.TextLikesAndViews>Likes: {likes}</S.TextLikesAndViews>
            <S.TextLikesAndViews>Views: {viewCount}</S.TextLikesAndViews>
          </S.RowLikesAndViews>

          <CustomButton
            onPress={() => navigation.navigate("VideoPlayer", { hlsPath })}
            text="Assistir"
            backgroundColor="#808C99"
            color="#FFFFFF"
            icon={playIcon}
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
