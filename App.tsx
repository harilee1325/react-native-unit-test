/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/LoginScreen';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
}

export default App;
