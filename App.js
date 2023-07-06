import 'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native'
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
    height:40,    
    borderTopWidth:0,
    borderRadius:10,
    position:"absolute",
    margin:5
    }
});

const TabBarIcon = ({ focused, color, size }) => {
  const iconName = focused ? 'rocket' : 'star'; // Örnek olarak 'rocket' ve 'star' ikonlarını kullanıyoruz

  return (
    <Icon name="rocket" size={15} color="red" />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Informations></Informations>
    </NavigationContainer>
  );
}