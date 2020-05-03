import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import AuthScreen from './screens/AuthScreen';
import Hello from './components/Hello';
import HomeScreen from './screens/HomeScreen';
import Loading from './screens/Loading';
import {checkAuth} from './actions/auth';
import ChatRoomScreen from './screens/ChatRoomScreen';

const Stack = createStackNavigator();
const App = () => {
  RNBootSplash.show();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
