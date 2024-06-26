import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigations/Navigation";
import { Context_Data } from "./Context/ContextProvider";
import * as font from "expo-font";

const App = () => {
  useEffect(() => {
    const loadFont = async () => {
      await font.loadAsync({
        "PopIns-Regular": require("./assets/fonts/Poppins-ExtraLight.ttf"),
        "PopIns-Bold": require("./assets/fonts/Poppins-Thin.ttf"),
      });
    };
    loadFont();
  }, []);

  return (
    <NavigationContainer>
      <Context_Data>
        <SafeAreaView style={styles.cn}>
          <Navigation />
        </SafeAreaView>
      </Context_Data>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  cn: {
    flex: 1,
    backgroundColor: "#ffff",
    marginTop: "10%",
    // paddingHorizontal: 10,
  },
});
