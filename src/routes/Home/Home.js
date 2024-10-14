import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import * as S from "./Home.style";
import PageHeader from "../../components/PageHeader/PageHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { CONTENT_MOCK_1 } from "../../mocks/Content.mock";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";

const Home = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const categoryList = CONTENT_MOCK_1;

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
                <S.CategoryName>{category.categoryTitle}</S.CategoryName>
                <S.ContentImageWrapper
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  {category.videos.map((video, videoIndex) => (
                    <S.ImageContainer
                      key={videoIndex}
                      onPress={() => navigation.navigate("ContentDetail")}
                    >
                      <S.CarouselImage
                        source={{ uri: video.uri }}
                        resizeMode="cover"
                      />
                      <S.ImageText>{video.text}</S.ImageText>
                    </S.ImageContainer>
                  ))}
                </S.ContentImageWrapper>
              </S.ContentView>
            ))
          )}
        </ScrollView>
      </S.Container>
    </SafeAreaView>
  );
};

export default Home;
