import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import Hello from './components/Hello';
import MainScreen from './screens/MainScreen';
import Loading from './screens/Loading';

const Stack = createStackNavigator();
const App = () => {
  // const isAuthenticated = false;
  // return <Hello name="Jawad" enthusiasmLevel={3} />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
