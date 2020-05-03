import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../actions/auth';
import Header from '../components/Header';
import Body from '../components/Body';
import {TouchableHighlight} from 'react-native-gesture-handler';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authUser);
  if (auth.status !== 'LOGGED_IN') props.navigation.navigate('Auth');
  console.log(auth);

  const onPressButton = item => {
    console.log(item);
    props.navigation.navigate('ChatRoom');
  };
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => {
          return (
            <TouchableHighlight
              onPress={() => onPressButton(item)}
              underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.item}>{item.key}</Text>
              </View>
            </TouchableHighlight>
          );
        }}
      />
      <Button title="LOG OUT" onPress={() => dispatch(logoutUser())} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
