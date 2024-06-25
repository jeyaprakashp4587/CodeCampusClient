import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Colors, pageView } from "../constants/Colors";
import { useEffect } from "react";

import HomeSkeleton from "../Skeletons/HomeSkeleton";

const Home = () => {
  // initialize skeleton effect
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);
  if (!load) {
    console.log(load);
    return <HomeSkeleton />;
  }
  return <View style={pageView}></View>;
};

export default Home;

const styles = StyleSheet.create({});
