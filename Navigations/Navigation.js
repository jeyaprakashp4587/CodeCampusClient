import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../LoginSystem/Login";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { Colors } from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBell,
  faHome,
  faPlus,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Post from "../Screens/Post";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Challenge from "../Screens/Challenge";
import Notifications from "../Screens/Notifications";
import MessageScreen from "../Screens/MessageScreen";
import { useState } from "react";
import { useEffect } from "react";
import SignUp from "../LoginSystem/SignUp";

// ------------- //
// Tab navigations

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarIconStyle: {
          color: Colors.lightGrey,
        },
        tabBarActiveTintColor: "#3385ff",
        tabBarInactiveTintColor: Colors.lightGrey,
        tabBarStyle: {
          height: 85,
          paddingBottom: 10,
          borderTopWidth: 0,
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: -25,
          marginBottom: 5,
          fontFamily: "PopIns-Regular",
          color: Colors.veryDarkGrey,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShadow: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Challenge"
        component={Challenge}
        options={{
          headerShadow: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="sword-cross"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          headerShadow: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPlus} color={Colors.white} size={24} />
          ),
          tabBarIconStyle: {
            backgroundColor: "#3385ff",
            width: 70,
            height: 70,
            borderRadius: 40,
            position: "absolute",
            top: -35,
            elevation: 1,
            borderWidth: 4,
            borderColor: "white",
          },
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          headerShadow: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faBell} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShadow: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUserGroup} color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
// stack navigations
const StackNavigations = (props) => {
  const [routname, setRoutename] = useState("index");
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    const checkStatus = async () => {
      const status = await props.status._j;
      // console.log("Status from props:", status);
      if (status === "index") {
        setRoutename("login");
        // console.log("Set initial route to login");
      }
    };

    checkStatus();
  }, [props.status]);
  return (
    <Stack.Navigator
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShadow: false }}
      />
      <Stack.Screen
        name="index"
        component={TabNavigation}
        options={{ headerShadow: false }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ headerShadow: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{ headerShadow: false }}
      />
      <Stack.Screen
        name="message"
        component={MessageScreen}
        options={{ headerShadow: false }}
      />
    </Stack.Navigator>
  );
};

// --------------- //
const Navigation = (props) => {
  return <StackNavigations status={props.status} />;
};

export default Navigation;

const styles = StyleSheet.create({});
