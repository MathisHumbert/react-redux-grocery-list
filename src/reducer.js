import { combineReducers } from 'redux';
import {
  CLEAR_ITEMS,
  EDIT_ITEM,
  HANDLE_INPUT,
  HANDLE_SUBMIT,
  REMOVE_ITEM,
  RESET_ALERT,
} from './actions';
import uniqid from 'uniqid';

const initialState = {
  list: [],
  value: '',
  alert: { type: '', msg: '' },
  isEditing: false,
  editingId: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === HANDLE_INPUT) {
    return { ...state, value: action.payload };
  }
  if (action.type === HANDLE_SUBMIT) {
    if (!state.value) {
      console.log('empty');
    } else if (state.isEditing) {
      let tempList = state.list.map((item) => {
        if (item.id === state.editingId) {
          item.name = state.value;
        }
        return item;
      });
      return {
        ...state,
        list: tempList,
        isEditing: false,
        editingID: '',
        value: '',
        alert: { type: 'success', msg: 'value changed' },
      };
    } else {
      return {
        ...state,
        value: '',
        list: [...state.list, { id: uniqid(), name: state.value }],
        alert: { type: 'success', msg: 'item addeed to the list' },
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      list: state.list.filter((item) => item.id !== action.payload),
      alert: { type: 'danger', msg: 'item removed' },
    };
  }
  if (action.type === EDIT_ITEM) {
    return {
      ...state,
      value: action.payload.value,
      isEditing: true,
      editingId: action.payload.id,
    };
  }
  if (action.type === CLEAR_ITEMS) {
    return { ...state, list: [], alert: { type: 'danger', msg: 'empty list' } };
  }
  if (action.type === RESET_ALERT) {
    console.log('reset');
    return { ...state, alert: { type: '', msg: '' } };
  }
  return state;
};

export default combineReducers({ reducer });
