import axios from "axios";

const API = axios.create({
  baseURL: "localhost:3000",
  timeout: 10000,
});

//OBTER VIDEOS POR CATEGORIA
export const getVideoByCategory = async (categoryId) => {
  try {
    const { data } = await API.get(`/videos/category/${categoryId}`);
    return data;
  } catch (e) {
    console.warn("Erro ao obter dados por category", e);
    return null; // Retornar null em caso de erro pode ser útil
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
export const increaseLike = async (video) => {
  try {
    const { data } = await API.patch(
      `/videos/${video.id}`,
      {},
      {
        ...video,
        like: video.like === 1 ? 0 : 1,
      }
    );
    return data;
  } catch (e) {}
};

// AUMENTAR VIEW
export const increaseView = async (video) => {
  try {
    const { data } = await API.patch(
      `/videos/${video.id}`,
      {},
      {
        ...video,
        views: video.views + 1,
      }
    );
    return data;
  } catch (e) {}
};

export default API;
