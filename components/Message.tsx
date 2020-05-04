import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface Props {
  user: string;
  content: string;
  time?: string | undefined;
}

const Message: React.FC<Props> = props => {
  const formatTime = (time: string | undefined) => {
    if (time) {
      const date = new Date(parseInt(time));
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;

      return hours + ' : ' + minutes;
    }
    return '';
  };

  return (
    <View style={styles.message}>
      <View style={styles.messageHeader}>
        <Text style={styles.messageUser}>{props.user || ''}</Text>
        <Text style={styles.messageTime}>{formatTime(props.time)}</Text>
      </View>
      <Text style={styles.messageContent}>{props.content || ''}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  message: {
    marginVertical: 10,
    marginStart: 5,
    width: '80%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#90fcda',
    opacity: 0.8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 48,
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  messageUser: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  messageTime: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  messageContent: {
    padding: 5,
    fontSize: 20,
    // height: 44,
  },
  messageInput: {
    alignSelf: 'flex-end',
    width: '100%',
  },
});
