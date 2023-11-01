import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


var { width, height } = Dimensions.get("window");
export default function MovieList({ title, data }) {
  let movieName = "call of duty moden warfare";
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleHead}>
        <Text style={styles.textclr}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.textclr}>See All</Text>
        </TouchableOpacity>
      </View>
      {/*movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.navigate("Movie", item)}
          >
            <View>
        <Image style={styles.movieCards} source={require('../assets/GoPro.jpg')} />
            
            
              <Text>{movieName.length>17? movieName.slice(0,14)+'...':movieName}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },
  titleHead: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
  },
  movieCards:{
    width: width * 0.33,
    height: height * 0.22,
    flex: 1,
    borderRadius:20,
  },
  textclr:{
    color:'white',
  }
});
