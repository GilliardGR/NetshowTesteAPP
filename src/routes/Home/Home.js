import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import * as S from "./Home.style";
import PageHeader from "../../components/PageHeader/PageHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";
import TransitionLoading from "../../components/TransitionLoading/TransitionLoading";
import API from "../../services/API";
import { getVideoByCategory, getVideo } from "../../services/API";

const Home = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [videosList, setVideosList] = useState([]);
  const [showTransitionLoading, setShowTransitionLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      const categoriesData = await getVideoByCategory();
      setCategoryList(categoriesData);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  const fetchVideos = async () => {
    try {
      const videosData = await getVideo();
      setVideosList(videosData);
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
