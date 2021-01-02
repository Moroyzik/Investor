import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// import { HomeScreen, PatientScreen } from "./screens";
import HomeScreen from "./screens/HomeScreen";
import PatientScreen from "./screens/PatientScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Пациенты",
        headerTintColor: "#2a86ff",
        headerStyle: {
          elevation: 0.5,
          shadowOpacity: 0.5,
        },
      },
    },
    Patient: {
      screen: PatientScreen,
      navigationOptions: {
        title: "Карта пациента",
        headerTintColor: "#2a86ff",
        headerStyle: {
          elevation: 0.5,
          shadowOpacity: 0.5,
        },
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
