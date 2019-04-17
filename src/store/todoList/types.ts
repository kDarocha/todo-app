export interface TodoItem {
  id: string
  text: string,
  checked: boolean
}

export interface TodoListState {
  items: TodoItem[]
}

// Describing the different ACTION NAMES available
export const FETCH_TODO_LIST = 'FETCH_TODO_LIST';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';
export const REMOVE_TODO = 'REMOVE_TODO';

interface FetchTodoListAction {
  type: typeof FETCH_TODO_LIST
  payload: TodoItem[]
}

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: TodoItem
}

interface ToggleTodoStatus {
  type: typeof TOGGLE_TODO_STATUS
  payload: TodoItem[]
}

interface RemoveTodo {
  type: typeof REMOVE_TODO
  payload: string
}

export type TodoListActionTypes = FetchTodoListAction | AddTodoAction | ToggleTodoStatus | RemoveTodo;
