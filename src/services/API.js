import axios from "axios";

const API = axios.create({
  baseURL: "http://10.0.2.2:3000",
  timeout: 10000,
});

export const getVideoByCategory = async () => {
  try {
    const { data } = await API.get("/categories");
    return data;
  } catch (e) {
    console.warn("Erro ao obter categorias:", e);
    return null;
  }
};

// OBTER VIDEO
export const getVideo = async () => {
  try {
    const { data } = await API.get("/videos");
    return data;
  } catch (e) {
    console.warn("Erro ao obter vídeos:", e);
    return null;
  }
};

// DAR LIKE
export const increaseLike = async (videoId) => {
  try {
    const { data: video } = await API.get(`/videos/${videoId}`);

    const updatedLikes = video.likes === 1 ? 0 : 1;

    const { data } = await API.patch(`/videos/${videoId}`, {
      likes: updatedLikes,
    });

    return data;
  } catch (e) {
    console.error("Erro ao atualizar os likes:", e);
  }
};

// AUMENTAR VIEW
export const increaseView = async (videoId, currentViews) => {
  try {
    const updatedViews = (currentViews || 0) + 1;

    const { data } = await API.patch(`/videos/${videoId}`, {
      views: updatedViews,
    });

    return data;
  } catch (e) {
    console.error("Erro ao atualizar as views:", e);
  }
};

export default API;
