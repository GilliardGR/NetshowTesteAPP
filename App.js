import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import RouteManager from "./src/routes/RouteManager";

const App = () => {
  return (
    <NavigationContainer>
      <RouteManager />
    </NavigationContainer>
  );
};

export default App;
