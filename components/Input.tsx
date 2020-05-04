import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export interface Props {
  value: string;
  isPassword?: boolean;
  multiline?: boolean;
  placeholder?: string;
  ref?: React.RefObject<TextInput>;
  handleInput: (text: string) => void;
}

const Input: React.FC<Props> = React.forwardRef((props, ref) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        // ref={props.passedRef}
        ref={ref}
        secureTextEntry={props.isPassword}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={text => props.handleInput(text)}
        multiline={props.multiline}
      />
    </View>
  );
});

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    marginVertical: 5,
  },
  textInput: {
    textAlign: 'center',
    fontSize: 20,
  },
});
