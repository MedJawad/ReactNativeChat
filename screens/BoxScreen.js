import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Button,
} from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';
import {ButtonGroup} from 'react-native-elements';

const MainScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const combinedValue = Animated.add(pan.x, pan.y);
  let bgColor = combinedValue.interpolate({
    inputRange: [-500, -350, -200, -50, 100, 250, 500],
    outputRange: ['#000', '#f00', '#ff0', '#0f0', '#0ff', '#00f', '#fff'],
  });
  console.log(bgColor);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),

      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      {/* <Body /> */}
      <Animated.View
        style={{transform: [{translateX: pan.x}, {translateY: pan.y}]}}
        {...panResponder.panHandlers}>
        <Animated.View
          style={{
            ...styles.box,
            backgroundColor: bgColor,
          }}
        />
      </Animated.View>
      {/* <View style={styles.footButton}>
        <Button
          title="Reset"
          onPress={() => {
            Animated.spring(pan, {
              toValue: {x: 0, y: 0},
              useNativeDriver: true,
            }).start();
          }}
        />
      </View> */}
    </View>
  );
};

export default MainScreen;

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
