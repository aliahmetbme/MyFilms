import 'react-native-gesture-handler';
import 'react-native-config';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import popularPeople from "./pages/populers"
import movies from "./pages/movie"
import series from "./pages/series"
import Search from './pages/_search';


const Tab = createBottomTabNavigator()

const Informations = () => {
  return(
    
      <Tab.Navigator screenOptions={({ route }, ) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon focused={focused} color={color} size={size} />
        ),tabBarStyle:styles.tabBar, headerShown:false
      })} >
        
        <Tab.Screen name="FamousScreen" component={popularPeople} />
        <Tab.Screen name="MoviesScreen" component={movies} />
        <Tab.Screen name="SeriesScreen" component={series} />
        <Tab.Screen name="SearchScreen" component={Search}  />
      </Tab.Navigator>
   

  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "black",
    height:Platform.OS ==="android" ? 50 : 90,    
    borderTopWidth:2,
    borderTopColor:"red"
    }
});

const TabBarIcon = ({ focused, color, size }) => {
  const iconName = focused ? 'film' : 'star'; // Örnek olarak 'rocket' ve 'star' ikonlarını kullanıyoruz
  
  return (
    <Icon name={iconName}size={25} color="red" />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Informations></Informations>
    </NavigationContainer>
  );
}