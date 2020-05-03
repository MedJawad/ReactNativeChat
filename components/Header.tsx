import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
export interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <View style={styles.container}>
      {/* <Icon name="home" type="material" /> */}
      <Text style={styles.bigText}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1ec28f',
    justifyContent: 'center',
  },
  bigText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 10,
  },
});
