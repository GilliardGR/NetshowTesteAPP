import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RouteManager from "./src/routes/RouteManager";
import { VideoLikesProvider } from "./src/context/VideoLikesContext";
import { VideoViewsProvider } from "./src/context/VideoViewsContext";

const App = () => {
  return (
    <VideoViewsProvider>
      <VideoLikesProvider>
        <NavigationContainer>
          <RouteManager />
        </NavigationContainer>
      </VideoLikesProvider>
    </VideoViewsProvider>
  );
};

export default App;
