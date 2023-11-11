import { NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieScreen from '../component/MovieScreen';
import PersonScreen from '../component/PersonScreen';
import SearchScreen from '../component/SearchScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
            <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen}/>
            <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen}/>
            <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
