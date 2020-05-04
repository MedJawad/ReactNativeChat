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
import Message from '../components/Message';

const ChatRoomScreen = () => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    {
      user: '',
      content: '',
      time: '',
    },
  ]);
  const myInput = useRef();
  const flatList = useRef(null);

  const reloadMessages = () => {
    loadMessages().then(messages => {
      messages.sort((a, b) => a.time - b.time);
      return setMessages(messages);
    });
  };

  useEffect(() => {
    reloadMessages();
    const timerId = setInterval(reloadMessages, 200);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleSubmit = () => {
    myInput.current.blur();
    if (messageInput.trim() === '') return;
    sendMessage(messageInput).then(reloadMessages());
    setMessageInput('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatList}
        // inverted={-1}
        data={messages}
        renderItem={({item}) => {
          return (
            <Message
              user={item.user}
              content={item.content}
              time={item.time || '17:18'}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        // initialScrollIndex={messages.length != 0 && messages.length - 1}
        // onScrollToIndexFailed={info => {
        //   console.log(info);

        //   // flatList.current.scrollToIndex({
        //   //   index: info.index,
        //   //   animated: true,
        //   // });
        // }}
      />
      <View style={styles.messageInput}>
        <Input
          placeholder="Enter Your Message"
          value={messageInput}
          handleInput={setMessageInput}
          ref={myInput}
          multiline
        />
        <View>
          <Button title="Send" onPress={handleSubmit} />
          <Button
            title="BZZ"
            color="#d60707"
            onPress={() => sendMessage('Bzz').then(reloadMessages())}
          />
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
    // height: 44,
    opacity: 1,
  },
  messageInput: {
    alignSelf: 'flex-end',
    width: '100%',
  },
});
