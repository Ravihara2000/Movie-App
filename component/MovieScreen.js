import { View, Text, ScrollView,Dimensions, TouchableOpacity,StyleSheet, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

var { width, height } = Dimensions.get("window");
const ios = Platform.OS=='ios';
const topMargin = ios? '': 'mt-3';
export default function MovieScreen() {
    const {params: item} = useRoute();
    useEffect(()=>{
        //call the movie detail api
    },[item])
    const navigation = useNavigation();
    const [isFavorite, toggleFavorite] = useState(false);
    const heartIconColor = isFavorite ? 'red' : 'white';
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
            <TouchableOpacity  onPress={()=> toggleFavorite(isFavorite)}>
                <HeartIcon size={35} color={heartIconColor}/>
            </TouchableOpacity>
        </SafeAreaView>

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
},
backBtn:{
    borderRadius: 10,  // Adjust the radius to make the corners more or less rounded
    padding: 5,
    backgroundColor:'gold',  // Adjust the padding to your preference 
}
});