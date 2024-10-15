import axios from "axios";

const API = axios.create({
  baseURL: "http://10.0.2.2:3000",
  timeout: 10000,
});

//OBTER VIDEOS POR CATEGORIA
export const getVideoByCategory = async (categoryId) => {
  try {
    const { data } = await API.get(`/videos/category/${categoryId}`);
    return data;
  } catch (e) {
    console.warn("Erro ao obter dados por category", e);
    return null;
  }
};

// OBTER VIDEO POR ID
export const getVideoById = async (id) => {
  try {
    const { data } = await API.get(`/videos/${id}`);
    return data;
  } catch (e) {
    return console.warn("Erro ao obter dados por id", e);
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
