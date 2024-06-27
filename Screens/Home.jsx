import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors, pageView } from "../constants/Colors";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import HomeSkeleton from "../Skeletons/HomeSkeleton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { EvilIcons } from "@expo/vector-icons";
import Posts from "../components/Posts";
import { Calendar } from "react-native-calendars";

const Home = ({ navigation }) => {
  // calender display
  const [calendardis, setCalenderdis] = useState(false);
  const [act, setActdate] = useState();
  // initialize skeleton effect
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);

  // show user activity functions
  const activityobg = [
    {
      activityType: "COURSE_COMPLETED",
      description: "Completed React Native Course",
      timestamp: "2024-06-25T12:34:56Z",
    },
    {
      activityType: "COURSE_COMPLETED",
      description: "Completed React Native Course",
      timestamp: "2024-06-26T12:34:56Z",
    },
  ];

  useEffect(() => {
    const fot = formatActivitiesForCalendar(activityobg);
    console.log(fot);
    setActdate(fot);
  }, []);
  const formatActivitiesForCalendar = (activities) => {
    const formatted = {};
    activities.forEach((activity) => {
      const date = activity.timestamp.split("T")[0];
      if (!formatted[date]) {
        formatted[date] = { marked: true, dots: [] };
      }
      formatted[date].dots.push({ key: activity.id, color: "blue" });
    });
    return formatted;
  };
  // render skeleton
  if (!load) {
    console.log(load);
    return <HomeSkeleton />;
  }
  return (
    <View style={pageView}>
      {/* calender component for absolute */}
      <Calendar
        style={{
          position: "absolute",
          zIndex: 10,
          top: 10,
          // width: 100,
          // height: 100,
          left: 200,
        }}
        markedDates={act}
        markingType={"dot"}
      />
      {/* home header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <Image
          source={require("../assets/images/pr.png")}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.veryLightGrey,
            width: "73%",
            // padding: 10,
            paddingHorizontal: 10,
            borderRadius: 13,
          }}
        >
          <EvilIcons name="search" size={30} color={Colors.lightGrey} />
          <TextInput
            placeholder="Search"
            style={{
              color: Colors.lightGrey,
              fontSize: 16,
              paddingHorizontal: 10,
              // borderWidth: 1,
              flex: 1,
              padding: 10,
            }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("message")}>
          <AntDesign name="message1" size={24} color={Colors.lightGrey} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ideas wrapper */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            padding: 5,
          }}
        >
          <View style={styles.ideaBox}>
            <Image
              source={require("../assets/images/carrer.png")}
              style={{ width: 35, height: 35, tintColor: "#52527a" }}
            />
            <Text
              style={{
                color: Colors.veryDarkGrey,
                fontSize: 10,
                fontFamily: "PopIns-Regular",
                // fontWeight: 700,
              }}
              numberOfLines={1}
            >
              Choose Career
            </Text>
          </View>
          <View style={styles.ideaBox}>
            <Image
              source={require("../assets/images/learning.png")}
              style={{ width: 35, height: 35, tintColor: "orange" }}
            />
            <Text
              style={{
                color: Colors.veryDarkGrey,
                fontSize: 10,
                fontFamily: "PopIns-Regular",
                // fontWeight: 700,
              }}
            >
              Learning
            </Text>
          </View>
          <View style={styles.ideaBox}>
            <Image
              source={require("../assets/images/reward.png")}
              style={{ width: 35, height: 35, tintColor: "#006622" }}
            />
            <Text
              style={{
                color: Colors.veryDarkGrey,
                fontSize: 10,
                fontFamily: "PopIns-Regular",
                // fontWeight: 700,
              }}
            >
              Rewards
            </Text>
          </View>
          <TouchableOpacity
            style={styles.ideaBox}
            onPress={() => setCalenderdis(!calendardis)}
          >
            <Image
              source={require("../assets/images/calendar.png")}
              style={{ width: 35, height: 35, tintColor: "#006666" }}
            />
            <Text
              style={{
                color: Colors.veryDarkGrey,
                fontSize: 10,
                fontFamily: "PopIns-Regular",
                fontWeight: 600,
              }}
              numberOfLines={1}
            >
              Your Activity
            </Text>
          </TouchableOpacity>
          {/* display: calendardis ? "flex" : "none"  */}
        </View>
        {/* posts */}
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  ideaBox: {
    width: "21%",
    height: 75,
    // borderWidth: 1,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
    padding: 10,
  },
});
