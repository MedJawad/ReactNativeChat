import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../actions/auth';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authUser);
  if (auth.status !== 'LOGGED_IN') props.navigation.navigate('Auth');

  return (
    <View style={styles.container}>
      <Text>HELLO HOME </Text>
      <Button title="LOG OUT" onPress={() => dispatch(logoutUser())} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  box: {
    // backgroundColor: 'blue',
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  footButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
