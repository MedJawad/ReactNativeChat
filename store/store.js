import {createStore, combineReducers, applyMiddleware} from 'redux';
import {authUser} from '../reducers/authReducer';
import thunkMiddleware from 'redux-thunk';
const combinedReducer = combineReducers({
  authUser,
});

const store = createStore(combinedReducer, applyMiddleware(thunkMiddleware));

export default store;
