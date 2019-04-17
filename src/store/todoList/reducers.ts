import _ from 'lodash';
import {
  // Types
  TodoListState,
  TodoListActionTypes,

  // Action names
  FETCH_TODO_LIST,
  ADD_TODO,
  TOGGLE_TODO_STATUS,
  REMOVE_TODO
} from './types';

const initialState: TodoListState = {
  items: []
};

export function todoListReducer(
  state = initialState,
  action: TodoListActionTypes
): TodoListState {
  switch (action.type) {
    case FETCH_TODO_LIST:
      return {
        ...state,
        items: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case TOGGLE_TODO_STATUS:
      return {
        ...state,
        items: action.payload
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: _.filter(state.items, item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
