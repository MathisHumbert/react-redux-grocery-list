import { combineReducers } from 'redux';
import { HANDLE_INPUT } from './actions';

const initialState = {
  list: ['carrots'],
  value: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === HANDLE_INPUT) {
    return { ...state, value: action.payload };
  }
  return state;
};

export default combineReducers({ reducer });
