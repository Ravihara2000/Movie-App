import { View, Text, ScrollView,Dimensions, TouchableOpacity,StyleSheet, Platform, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from './Cast';

var { width, height } = Dimensions.get("window");
const ios = Platform.OS==='ios';
const topMargin = ios? 0:'mt-3';
export default function MovieScreen() {
  let movieName = 'call of duty modenw walfare';
    const {params: item} = useRoute();
    useEffect(()=>{
        //call the movie detail api
    },[item])
    const navigation = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
      // Toggle the favorite state
      setIsFavorite(!isFavorite);
    };
    const [cast, setCast] = useState([1,2,3,4,5])
    const heartIconColor = isFavorite ? 'yellow' : 'white';
  
  return (

    <View style={styles.container}>
      <ScrollView
      contentContainerStyle={{paddingBottom:20}}
      >
        {/**back button and movie poster */}
        <SafeAreaView style={styles.safearea}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <ChevronLeftIcon size={30} strokeWidth={3.5} color={'white'}>

                </ChevronLeftIcon>
            </TouchableOpacity>
            <TouchableOpacity  onPress={toggleFavorite}>
                <HeartIcon size={35} color={heartIconColor}/>
            </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image source={require('../assets/codmw.jpg')}
          style={{width,height:height*0.55}}/>

      <LinearGradient
        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
        style={{ width, height: height * 0.40, position: 'absolute', bottom: 0 }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
        </View>  
        {/**title */}
        <Text style={styles.Movietitle} >
          {movieName}
        </Text>

        {/**start , release, rntime */}
        <Text style={styles.MovieDetail}>
          Released . 2020 . 170 min 
        </Text>
        {/**genres */}
        <View style={styles.genresArea}>
          <Text style={styles.genresText}t>Action .</Text>
          <Text style={styles.genresText}>Comedy .</Text>
          <Text style={styles.genresText}>Thrill .</Text>

        </View>

        {/*description */}
        <View>
        <Text style={styles.MovieDesc}>
          ggg ggggggg  hhhhhhhhhhhh jjjjjjj kkkkkkkkkkkk llllllllllllllllllllllllllll ggggggggggggggggggggggggg yyyyyyyyyyyyyyyyyyyyyyyy
        </Text>
        </View>

        {/**cast */}
        <Cast cast={cast}/>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black',
    },
safearea:{
    flexDirection:'row',
    justifyContent: "space-between",
    marginTop: topMargin,
    alignItems: 'center',
    paddingHorizontal: 16,
},
backBtn:{
    borderRadius: 10,  // Adjust the radius to make the corners more or less rounded
    padding: 5,
    backgroundColor:'gold',  // Adjust the padding to your preference 
},
Movietitle:{
  marginTop:10,
  color:'white',
  fontWeight:'bold',
  fontSize:20,
  textAlign:'center',
  letterSpacing: 2,
},
MovieDetail:{
  marginTop:10,
  fontWeight:'semi-bold',
  fontSize:14,
  color:'white',
  textAlign:'center',

},
MovieDesc:{
  marginTop:10,
  fontWeight:'semi-bold',
  fontSize:14,
  color:'white',
  textAlign:'center',
},
genresArea:{
  flexDirection:'row',
  justifyContent: "center",
},genresText:{
  fontSize:14,
  color:'white',
}
});