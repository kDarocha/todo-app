import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import _ from 'lodash';

// Store
import { AppState } from 'store';
import {
  FETCH_TODO_LIST,
  ADD_TODO,
  TOGGLE_TODO_STATUS,
  REMOVE_TODO
} from './types';

// Fake todoList data
import fakeTodoListData from '__mock__/todoList';

// Utils
import { uniqueID } from 'utils';

export const fetchTodoList = () : ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const asyncTodoList = await exampleAPI();

  dispatch({
    type: FETCH_TODO_LIST,
    payload: asyncTodoList
  });
};

export const addTodo = (
  text: string
) : ThunkAction<void, AppState, null, Action<string>> => dispatch => {

  dispatch({
    type: ADD_TODO,
    payload: {
      id: uniqueID(),
      text: text
    }
  });
};

export const toggleTodoStatus = (
  todoId: string,
  checked: boolean
) : ThunkAction<void, AppState, null, Action<string>> => (dispatch, getState) => {
  const newTodoList = [...getState().todoList.items];
  const index = _.findIndex(newTodoList, todo => todo.id === todoId);

  newTodoList[index] = {
    ...newTodoList[index],
    checked: checked
  }

  dispatch({
    type: TOGGLE_TODO_STATUS,
    payload: newTodoList
  });
};

export const removeTodo = (
  todoId: string
) : ThunkAction<void, AppState, null, Action<string>> => dispatch => {

  dispatch({
    type: REMOVE_TODO,
    payload: todoId
  });
};

function exampleAPI() {
  return Promise.resolve(fakeTodoListData);
}
