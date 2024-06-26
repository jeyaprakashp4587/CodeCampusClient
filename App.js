import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigations/Navigation";
import { Context_Data } from "./Context/ContextProvider";

import SplashScreen from "./Splashscreen/SplashScreen";

const App = () => {
  const [load, setLoad] = useState(true);

  const Handleduration = (data) => {
    setLoad(data);
    // console.log(data);
  };
  const [status, setStatus] = useState("");
  const HandleStatus = (status) => {
    setStatus(status);
  };
  // render the components

  return (
    <NavigationContainer>
      <Context_Data>
        <SafeAreaView style={styles.cn}>
          {load ? (
            <SplashScreen duration={Handleduration} status={HandleStatus} />
          ) : (
            <Navigation status={status} />
          )}
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
