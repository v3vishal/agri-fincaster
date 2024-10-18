import * as React from 'react';
import Home from './screens/home.js';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator';


import SideDrawer from './screens/sidedrawer';
import Login from './screens/login.js';
import CropRec from './screens/croprec.js'
import Fin from './screens/fin.js'
import Weatherpred from './screens/weather2.js'


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
  CropRec : {screen : CropRec},
  Fin : {screen : Fin},
  Weather : {screen : Weatherpred}
});

const AppContainer = createAppContainer(switchNavigator);