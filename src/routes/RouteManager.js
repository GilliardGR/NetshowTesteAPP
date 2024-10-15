import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import Home from "./Home/Home";
import ContentDetail from "./ContentDetail/ContentDetail";
import InitialPage from "./InitialPage/InitialPage";
import VideoPlayer from "./VideoPlayerScreen/VideoPlayerScreen";

const Stack = createNativeStackNavigator();

const RouteManager = () => {
  return (
    <Stack.Navigator
      initialRouteName="InitialPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ContentDetail" component={ContentDetail} />
      <Stack.Screen name="InitialPage" component={InitialPage} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
  );
};

export default RouteManager;
