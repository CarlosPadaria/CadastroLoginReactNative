import React, { useState } from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Cadastro from './Cadastro';
import Login from './Login';

const App = () => {
  const Stack = createNativeStackNavigator();
  
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
  }
export default App;
