import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window"); //get mobile height n width
export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const handClick=()=>{
    navigation.navigate('Movie',item)
  }
  return (
    <View>
      <Text>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} handClick={handClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={600}
        itemWidth={width*0.6}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const MovieCard = ({ item ,handClick}) => {
  return (
    <TouchableWithoutFeedback onPress={handClick}>
      <Image style={styles.movieCards} source={require('../assets/GoPro.jpg')} />
      
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: width * 0.6,
    height: height * 0.4,
  },
  tex1:{
    color:'white',
    marginTop:100,
  },
  movieCards:{
    width: width * 0.6,
    height: height * 0.4,
    borderRadius:20,
  }
});
