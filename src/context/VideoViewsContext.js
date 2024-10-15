import React, { createContext, useState, useContext } from "react";

const VideoViewsContext = createContext();

export const VideoViewsProvider = ({ children }) => {
  const [videoViews, setVideoViews] = useState({});

  const updateViews = (videoId, views) => {
    setVideoViews((prevViews) => ({
      ...prevViews,
      [videoId]: views,
    }));
  };

  return (
    <VideoViewsContext.Provider value={{ videoViews, updateViews }}>
      {children}
    </VideoViewsContext.Provider>
  );
};

export const useVideoViews = () => {
  return useContext(VideoViewsContext);
};
