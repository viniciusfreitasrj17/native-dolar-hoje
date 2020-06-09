import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./screens/Main";

const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: "Dolar Hoje",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#FFF",
      headerStyle: {
        backgroundColor: "#7d40e7",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
