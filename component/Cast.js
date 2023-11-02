import { View, Text,StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Cast({cast}) {
    let personName = 'Keanu Reevs';
    let characterName = 'John Wick';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Cast</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}/>
        {
            cast && cast.map((person, index)=>{
                return(
                    <TouchableOpacity
                    key={index}
                    style={{alignItems:'center',flexDirection:'row',}}>
                        <Text style={{color:'white',fontSize:14}}>
                            {
                                characterName.length>10? characterName.slice(0,10)+ '...':characterName
                            }
                        </Text>
                        <Text style={{color:'white',fontSize:14}}>
                            {
                                personName.length>10? personName.slice(0,10)+ '...':personName
                            }
                        </Text>

                    </TouchableOpacity>
                )
            })
        }
        
    <ScrollView/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black',
      marginTop:10,
    },
    title:{
        color:'white',

    }
});