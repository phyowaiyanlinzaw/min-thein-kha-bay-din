/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {MouseEvent, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchInput from './components/SearchInput';
import TestScreen from './screens/NumberScreen';
import AppStackNavigator from './navigator/AppStackNavigator';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}

export default App;
