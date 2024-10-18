import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Home from '../screens/home.js'
//import Articles from '../screens/articles'
import Crop from '../screens/crop.js'
import Weather from '../screens/weather.js'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator({
  
  
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: (
        <Image
          source={require('../assets/smthn.png')}
          style={{ width: 100, height: 100, marginTop : -50}}
        />
      ),
    },
  },
  Weather: {
    screen: Weather, 
    navigationOptions: {
      tabBarLabel: 'Weather',
      tabBarIcon: (
        <Image
          source={require('../assets/weat.png')}
          style={{ width: 100, height: 100, marginTop : -50}}
        />
      ),
    },
  },
  Crop: {
    screen: Crop,
    navigationOptions: {
      tabBarLabel: 'Crops',
      tabBarStyle: { position: 'absolute'}, 
       
       
      

      tabBarIcon: (
        <Image
          source={require('../assets/crop.png')}
          style={{ width: 100, height: 100, marginTop : -50}}
        />
      ),
    }, 
  },

 

});
