import * as React from 'react';
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import popularPeople from "./pages/populers"
import movies from "./pages/movie"
import series from "./pages/series"


const Tab = createBottomTabNavigator()

const Informations = () => {
  return(
    <NavigationContainer >
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Famous" component={popularPeople} />
        <Tab.Screen name="Movies" component={movies} />
        <Tab.Screen name="Series" component={series} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Informations></Informations>
  );
}