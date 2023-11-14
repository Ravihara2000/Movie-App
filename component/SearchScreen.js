import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { XMarkIcon } from 'react-native-heroicons/outline';
export default function SearchScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search Movies'
          placeholderTextColor='grey'
        />
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <XMarkIcon size={25} color="white" style={{marginTop: 7,backgroundColor:"grey", borderRadius:50}}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    width: '100%',
    height: 40,
    backgroundColor: 'black', // Set the background color to black
    borderRadius: 25,
    paddingHorizontal: 16,
    marginTop: 16,
    borderWidth: 1, // Add a white border
    borderColor: 'white', // Set the border color to white
    justifyContent: 'center', // Center content vertically
  },
  searchInput: {
    flex: 1,
    color: 'white', // Set the text color to white
  },
});
