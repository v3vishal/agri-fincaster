import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Crop from '../screens/crop';
import Weather from '../screens/weather';

const Tab = createBottomTabNavigator();

function CustomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'Home') {
            icon = require('../assetss/smthn.png');
          } else if (route.name === 'Weather') {
            icon = require('../assetss/weat.png');
          } else if (route.name === 'Crop') {
            icon = require('../assetss/crop.png');
          }

          return <Image source={icon} style={styles.tabIcon} />;
        },
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
            {route.name}
          </Text>
        ),
      })}
      tabBarOptions={{
        showIcon: true,
        style: styles.tabContainer,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Weather" component={Weather} />
      <Tab.Screen name="Crop" component={Crop} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#FBE5C8',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabLabel: {
    color: '#000',
    fontSize: 10,
  },
  tabLabelFocused: {
    color: '#ff8a65',
  },
});

export default CustomTabNavigator;
