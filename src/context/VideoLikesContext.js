import React, { createContext, useState } from "react";

export const VideoLikesContext = createContext();

export const VideoLikesProvider = ({ children }) => {
  const [videosLikes, setVideosLikes] = useState({});

  const updateLikes = (videoId, newLikes) => {
    setVideosLikes((prevState) => ({
      ...prevState,
      [videoId]: newLikes,
    }));
  };

  return (
    <VideoLikesContext.Provider value={{ videosLikes, updateLikes }}>
      {children}
    </VideoLikesContext.Provider>
  );
};
