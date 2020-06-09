import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./screens/Main";

const MainNavigator = createStackNavigator({
  Main,
});

export default createAppContainer(MainNavigator);
