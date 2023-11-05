import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Cast({ cast }) {
  let characterName = 'John Wick';
  let personName = "michel johnson";
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate('Person',person)}key={index} style={styles.castItem}>
                <View style={styles.castImg}>
                    <Image source={require('../assets/profile.jpg')}
          style={{height:50,width:50,borderRadius:50}}/>
                </View>
                <Text style={styles.characterName}>
                  {characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName}
                </Text>
                <Text style={{color:'white',fontSize:14}}>
                            {
                                personName.length>10? personName.slice(0,10)+ '...':personName
                            }
                        </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 10,
  },
  title: {
    color: 'white',
    marginBottom:10,
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
  castItem: {
    alignItems: 'center',
    marginRight: 25, // Add some spacing between cast members
  },
  characterName: {
    color: 'white',
    fontSize: 14,
  },
  castImg:{
    backgroundColor:'black',
  }
});
