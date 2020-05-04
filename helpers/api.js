import axios from 'axios';
import deviceStorage from './deviceStorage';

export const loadMessages = async () => {
  const AUTH_TOKEN = await deviceStorage.getItem('jwt');

  return axios
    .get(
      `https://chatapp-aa089.firebaseio.com/messages.json?orderBy="time"&limitToLast=20&auth=${AUTH_TOKEN}`,
    )
    .then(res => {
      // console.log(res);
      return Object.values(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCurrentUser = async () => {
  const AUTH_TOKEN = await deviceStorage.getItem('jwt');
  const AUTH_EMAIL = await deviceStorage.getItem('email');

  return axios
    .get(
      `    https://chatapp-aa089.firebaseio.com/users.json?orderBy="email"&equalTo="${AUTH_EMAIL}"&auth=${AUTH_TOKEN}`,
    )
    .then(res => {
      // console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const sendMessage = async messageInput => {
  const AUTH_TOKEN = await deviceStorage.getItem('jwt');

  const user = await getCurrentUser().then(data => Object.keys(data)[0]);

  // console.log(messageInput, user);

  const config = {
    headers: {
      'Content-Type': 'text/plain',
    },
  };

  return axios
    .post(
      `https://chatapp-aa089.firebaseio.com/messages.json?auth=${AUTH_TOKEN}`,
      `{
        "content" : "${messageInput}",
        "user": "${user}",
        "time": "${'' + Date.now()}"
    }`,
      config,
    )
    .then(res => {
      // console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
