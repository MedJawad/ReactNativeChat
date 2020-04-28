import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Input from '../components/Input';
import {login} from '../Auth/auth';
import {useRef} from 'react';
import firebase from 'react-native-firebase';

const AuthScreen = props => {
  const myInput = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    // login({username, password});
    // setTimeout(() => props.navigation.navigate('Home'), 100);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({errorMessage: error.message}));
    myInput.current.blur();
    setUsername('');
    setPassword('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.bigText}>Authenticate</Text>
        <Input
          passedRef={myInput}
          placeholder="Email"
          value={email}
          handleInput={setEmail}
        />
        <Input
          passedRef={myInput}
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
});
