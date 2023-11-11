import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const topMargin = ios ? 0 : "mt-3";

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    // Toggle the favorite state
    setIsFavorite(!isFavorite);
  };
  const heartIconColor = isFavorite ? "yellow" : "white";
  return (
    <View style={styles.container}>
      {/**back button and movie poster */}
      <SafeAreaView style={styles.safearea}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon
            size={30}
            strokeWidth={3.5}
            color={"white"}
          ></ChevronLeftIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFavorite}>
          <HeartIcon size={35} color={heartIconColor} />
        </TouchableOpacity>
      </SafeAreaView>
      <View>
        <View style={styles.imgBg}>
          <View style={styles.imageStyle}>
            <Image
              style={{
                shadowColor: "grey",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                borderWidth: 1,
                borderColor: "grey",
                width: width * 0.8,
                height: height * 0.43,
                borderRadius: 200,
              }}
              source={require("../assets/profile.jpg")}
            />
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Ravihara
        </Text>
        <Text style={{ textAlign: "center", color: "white", fontSize: 12 }}>
          Matara, Sri Lanka
        </Text>
      </View>
      <View style={styles.detailArea}>
        <View style={styles.detailItem}>
          <Text style={{ fontSize: 15 }}>Gender</Text>
          <Text>Male</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.detailItem}>
          <Text style={{ fontSize: 15 }}>Birthday</Text>
          <Text>1964-09-02</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.detailItem}>
          <Text style={{ fontSize: 15 }}>Known for</Text>
          <Text>Acting</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.detailItem}>
          <Text style={{ fontSize: 15 }}>Popularity</Text>
          <Text>64.23</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  safearea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: topMargin,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  backBtn: {
    borderRadius: 10, // Adjust the radius to make the corners more or less rounded
    padding: 5,
    backgroundColor: "gold", // Adjust the padding to your preference
  },
  imgBg: {
    // Add a background color here
  },
  imageStyle: {
    alignItems: "center",
    overflow: "hidden",
  },
  detailArea: {
    marginTop: 10,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "grey",
    padding: 5,
    alignItems: "center",
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
  },
    verticalLine: {
    height: '80%', // Adjust the height of the vertical line as needed
    width: 1, // Width of the vertical line
    backgroundColor: 'white',
  },
});
