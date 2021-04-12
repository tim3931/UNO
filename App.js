import React, { useEffect, useState } from "react";
import { Provider as StoreProvider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavigator from './src/navigators/BottomNavigator';
import store from './src/store';

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#2b75fb",
      accent: "#00c01f",
    },
  };

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <BottomNavigator />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
