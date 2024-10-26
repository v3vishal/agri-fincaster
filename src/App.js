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

const AppContainer = createAppContainer(switchNavigator);*/
import React from 'react'; // You can import React without the * as syntax
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator';
import Home from './screens/home.js';
import SideDrawer from './screens/sidedrawer';
import Login from './screens/login.js';
import CropRec from './screens/croprec';

function App() {
  return (
    <AppContainer />
  );
}

const switchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  TabNavigation: { screen: AppTabNavigator },
  Home: { screen: Home },
  SideDrawer: { screen: SideDrawer },
  CropRec: { screen: CropRec }
});

const AppContainer = createAppContainer(switchNavigator);

export default App;