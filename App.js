import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigations/Navigation";
import { Context_Data } from "./Context/ContextProvider";

const App = () => {
  // if (!fontsLoaded) {
  //   return <Text>Loading...</Text>; // or some loading indicator
  // }
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
    // paddingHorizontal: 10,
  },
});
