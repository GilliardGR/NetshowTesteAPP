import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import * as S from "./Home.style";
import PageHeader from "../../components/PageHeader/PageHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";
import TransitionLoading from "../../components/TransitionLoading/TransitionLoading";
import API from "../../services/API";

const Home = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [videosList, setVideosList] = useState([]);
  const [showTransitionLoading, setShowTransitionLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      const url = "http://10.0.2.2:3000/categories";
      const categoriesData = await API.get(url);
      setCategoryList(categoriesData.data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  const fetchVideos = async () => {
    try {
      const url = "http://10.0.2.2:3000/videos";
      const videosData = await API.get(url);
      setVideosList(videosData.data);
    } catch (error) {
      console.error("Erro ao buscar vídeos:", error);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    await Promise.all([fetchCategories(), fetchVideos()]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const goToContentDetailPage = (video) => {
    setShowTransitionLoading(true);
    setTimeout(() => {
      setShowTransitionLoading(false);
      navigation.navigate("ContentDetail", {
        title: video.title,
        created_at: video.created_at,
        description: video.description,
        likes: video.likes,
        views: video.views,
        thumbnail: video.thumbnail,
        hlsPath: video.hls_path,
        videoId: video.id,
      });
    }, 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <PageHeader />

        <ScrollView>
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            categoryList.map((category, index) => (
              <S.ContentView key={index}>
                <S.CategoryName>{category.title}</S.CategoryName>
                <S.ContentImageWrapper
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  {videosList
                    .filter((video) => video.category == category.id)
                    .map((video, videoIndex) => (
                      <S.ImageContainer
                        key={videoIndex}
                        onPress={() => goToContentDetailPage(video)}
                      >
                        <S.CarouselImage
                          source={{ uri: video.thumbnail }}
                          resizeMode="cover"
                        />
                        {/* Se quiser exibir o título dos vídeos, remova o comentário da linha abaixo */}
                        {/* <S.ImageText>{video.title}</S.ImageText> */}
                      </S.ImageContainer>
                    ))}
                </S.ContentImageWrapper>
              </S.ContentView>
            ))
          )}
        </ScrollView>
      </S.Container>

      <TransitionLoading
        visible={showTransitionLoading}
        onClose={() => setShowTransitionLoading(false)}
      />
    </SafeAreaView>
  );
};

export default Home;
