import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TrendingMovies from "../component/trendingMovies";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import MovieList from "../component/MovieList";
import { useNavigation } from "@react-navigation/native";
import SearchScreen from "./SearchScreen";
import Loading from "../component/Loading";
//import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "../api/moviedb";
import { fetchTrendingMovies } from "../api/moviedb";

//const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3, 4]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getTrendingMovies();
  },[])

  const getTrendingMovies = async ()=>{
    const data = await fetchTrendingMovies();
    console.log('got trending movies :',data);
    if(data && data.results) setTrending(data.results);
    setLoading(false);
  }
  return (
    <View style={styles.entireSc}>
      <SafeAreaView>
        <View style={styles.heroSection}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color={"white"} />

          <Text style={styles.headerText}>
            <Text style={styles.firstLetter}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/*movie list */}
         {trending.length>0 && <TrendingMovies data={trending} />}

          {/**upcoming movie raw */}
          <MovieList title="Upcoming" data={upcoming} />

          {/**top rated movie raw */}
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heroSection: {
    backgroundColor: "black",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "white",
  },
  firstLetter: {
    color: "orange",
  },
  entireSc: {
    backgroundColor: "black",
    flex: 1,
  },
});
