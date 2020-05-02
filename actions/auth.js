import {AUTH} from './actionTypes';
import {} from 'react-redux';

import {URI, API_KEY} from '../firebase.json';
import axios from 'axios';
import qs from 'qs';
import deviceStorage from '../helpers/deviceStorage';
import {authUser} from '../reducers/authReducer';

const begin = () => {
  return {type: AUTH.BEGIN};
};
const success = data => {
  return {type: AUTH.SUCCESS, status: 'success', data};
};
const error = err => {
  return {type: AUTH.ERROR, status: 'error', error: err};
};
const logout = () => {
  return {type: AUTH.LOGOUT};
};

const beginCheck = () => {
  return {type: AUTH.BEGIN_CHECK};
};

export function loginUser({email, password}) {
  return function(dispatch) {
    dispatch(begin());
    console.log('START LOGIN');

    const requestBody = {
      email,
      password,
      returnSecureToken: true,
    };

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    return axios
      .post(
        `${URI}/accounts:signInWithPassword?key=${API_KEY}`,
        qs.stringify(requestBody),
        config,
      )
      .then(res => {
        dispatch(success(res.data));
        console.log(res);
        deviceStorage.saveItem('jwt', res.data.idToken);
      })
      .catch(err => {
        dispatch(error('Request failed'));
        // console.log(err);
      });
  };
}
export function checkAuth() {
  return function(dispatch) {
    dispatch(beginCheck());
    console.log('START Checking Auth');

    return deviceStorage.getItem('jwt').then(jwt => {
      jwt && dispatch(success({idToken: jwt}));
    });
  };
}
export function logoutUser() {
  return dispatch => {
    deviceStorage.removeItem('jwt');
    dispatch(logout());
  };
}
