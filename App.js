import React from "react";
// react navigator
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Movie from "./src/screens/Movie";
import { useFonts } from "expo-font";

// Stack
const Stack = createStackNavigator();
export default () => {
  // fonts
  const [fontLoaded] = useFonts({
    regular: require("./assets/fonts/NunitoSans-Regular.ttf"),
    Bold: require("./assets/fonts/NunitoSans-Bold.ttf"),
    Black: require("./assets/fonts/NunitoSans-Black.ttf"),
    extraBold: require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
    extraLight: require("./assets/fonts/NunitoSans-ExtraLight.ttf"),
    light: require("./assets/fonts/NunitoSans-Light.ttf"),
    semiBold: require("./assets/fonts/NunitoSans-SemiBold.ttf"),
  });

  return fontLoaded ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="movies"
          component={Movie}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    ""
  );
};
