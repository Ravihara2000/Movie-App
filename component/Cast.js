import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Cast({ cast }) {
  let characterName = 'John Wick';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity key={index} style={styles.castItem}>
                <Text style={styles.characterName}>
                  {characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName}
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
});
