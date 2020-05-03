import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Text,
  Button,
} from 'react-native';
import Input from '../components/Input';
import {loadMessages, sendMessage} from '../helpers/api';

const ChatRoomScreen = () => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    {user: 'Devin', content: 'Had l message zwin'},
  ]);
  const myInput = useRef();

  useEffect(() => {
    loadMessages().then(data => setMessages(data));
  }, []);

  const handleSubmit = () => {
    sendMessage(messageInput);
    myInput.current.blur();
    setMessageInput('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({item}) => {
          return (
            <View style={styles.message}>
              <Text style={styles.itemUser}>{item.user}:</Text>
              <Text style={styles.itemContent}> {item.content}</Text>
            </View>
          );
        }}
      />
      <View style={styles.messageInput}>
        <Input
          placeholder="Enter Your Message"
          value={messageInput}
          handleInput={setMessageInput}
          ref={myInput}
        />
        <View>
          <Button title="Send" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fda',
  },
  message: {
    marginVertical: 10,
    marginStart: 5,
    width: '80%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'darkgray',
    opacity: 0.8,
  },
  itemUser: {
    padding: 10,
    fontSize: 22,
    height: 44,
    color: 'white',
    fontWeight: 'bold',
    opacity: 1,
  },
  itemContent: {
    padding: 5,
    fontSize: 20,
    height: 44,
    opacity: 1,
  },
  messageInput: {
    alignSelf: 'flex-end',
    width: '100%',
  },
});
