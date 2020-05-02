import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../components/Input';
import {loginUser, checkAuth} from '../actions/auth';
// import deviceStorage from '../helpers/deviceStorage';

const AuthScreen = props => {
  const auth = useSelector(state => state.authUser);

  if (auth.status === 'LOGGED_IN') props.navigation.navigate('Home');

  const dispatch = useDispatch();
  const myInput = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(loginUser({email, password}));
    myInput.current.blur();
    setEmail('');
    setPassword('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {false && (
          <View style={styles.errorContainer}>
            <Text style={styles.bigText}>{error}</Text>
          </View>
        )}
        <Text style={styles.bigText}>Authenticate</Text>
        <Input
          ref={myInput}
          placeholder="Email"
          value={email}
          handleInput={setEmail}
        />
        <Input
          ref={myInput}
          isPassword
          placeholder="Password"
          value={password}
          handleInput={setPassword}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            color="rgb(71, 0, 0)"
            title="Log In"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(71, 0, 0)',
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 10,
    backgroundColor: 'rgb(71, 0, 0)',
  },
  bigText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  button: {},
  errorContainer: {
    backgroundColor: 'red',
    textAlign: 'center',
  },
});
