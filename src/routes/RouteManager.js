import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import Home from "./Home/Home";
import ContentDetail from "./ContentDetail/ContentDetail";
import InitialPage from "./InitialPage/InitialPage";

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
    </Stack.Navigator>
  );
};

export default RouteManager;
