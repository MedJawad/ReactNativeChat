import {AUTH} from '../actions/actionTypes';
const initialState = {
  status: 'LOGGED_OUT',
  user: {},
  error: '',
};

export const authUser = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.BEGIN:
    case AUTH.BEGIN_CHECK:
      return {...state, status: 'LOADING'};
    case AUTH.SUCCESS:
      return {...state, status: 'LOGGED_IN', user: action.data, error: ''};
    case AUTH.ERROR:
      return {...state, status: 'ERROR', user: {}, error: action.err};
    case AUTH.LOGOUT:
      return {...state, status: 'LOGGED_OUT', user: {}, err: ''};

    default:
      return state;
  }
};
