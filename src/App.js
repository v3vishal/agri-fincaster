/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The change has begun.
        </p>
      </header>
    </div>
  );
}

export default App;

import * as React from 'react';


import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator';
import Home from './screens/home.js';


import SideDrawer from './screens/sidedrawer';
import Login from './screens/login.js';
import CropRec from './screens/croprec.js'


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const switchNavigator = createSwitchNavigator({
  Login : {screen: Login},
  TabNavigation: { screen: AppTabNavigator },
  Home: { screen: Home},
  SideDrawer: { screen: SideDrawer },
  CropRec : {screen : CropRec}



});

const AppContainer = createAppContainer(switchNavigator);*/import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import CustomTabNavigator from './components/AppTabNavigator';
import Home from './screens/home';
import SideDrawer from './screens/sidedrawer';
import CropRec from './screens/croprec';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={CustomTabNavigator} />
        <Stack.Screen name="SideDrawer" component={SideDrawer} />
        <Stack.Screen name="CropRec" component={CropRec} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
