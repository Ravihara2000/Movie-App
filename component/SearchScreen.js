import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/outline";

var { width, height } = Dimensions.get("window");
export default function SearchScreen() {
  const navigation = useNavigation();
  const [result, setResult] = useState([1,2,3,4]);
  let movieName = "call of duty moden warfare";
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Movies"
          placeholderTextColor="grey"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <XMarkIcon
            size={25}
            color="white"
            style={{ marginTop: 7, backgroundColor: "grey", borderRadius: 50 }}
          />
        </TouchableOpacity>
      </View>
      {/**results */}
      {result.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15, marginVertical: 3 }}
        >
          <Text style={{ color: "white" }}>Result ({result.length})</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {result.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push("Movie", item)}
                >
                  <View style={{ marginTop: 2, marginBottom: 4 }}>
                    <Image
                      source={require("../assets/codmw.jpg")}
                      style={{
                        borderRadius: 50,
                        width: width * 0.44,
                        height: height * 0.3,
                      }}
                    />
                    <Text style={{ color: "white" }}>
                      {movieName.length > 22
                        ? movieName.slice(0.22) + "..."
                        : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{flexDirection:"row", justifyContent:"center"}}>
          <Image
          source={require("../assets/movieTime.png")} style={{width:width*1.0, height:height*0.44}}/>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    backgroundColor: "black", // Set the background color to black
    borderRadius: 25,
    paddingHorizontal: 16,
    marginTop: 16,
    borderWidth: 1, // Add a white border
    borderColor: "white", // Set the border color to white
    justifyContent: "center", // Center content vertically
  },
  searchInput: {
    flex: 1,
    color: "white", // Set the text color to white
  },
});
