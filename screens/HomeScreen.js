import Screen from "../screens/HomeScreen"; // Rename the imported component
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
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

//const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  return (
    <View>
      <SafeAreaView>
        <View style={styles.heroSection}>
          <Bars3CenterLeftIcon
            size={30}
            strokeWidth={2}
            color={"white"}
          />

          <Text style={styles.headerText}>
            <Text style={styles.firstLetter}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/*movie list */}
          <TrendingMovies data={trending} />

          {/**upcoming movie raw */}
          <MovieList title='upcoming' data={upcoming} />
          
          {/**top rated movie raw */}
          <MovieList title='Top Rated' data={topRated} />
        </ScrollView>
      </SafeAreaView>
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
  body: {
    backgroundColor: "grey",
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
});
