import React, {
  // Hooks
  useEffect,
  useState,

  // Types
  FormEvent
} from 'react';
import { List, Form, Input } from 'antd';
import { connect } from 'react-redux';

// Containers
import TodoItem from 'containers/TodoItem';

// Store
import { AppState } from 'store';
import { TodoListState } from 'store/todoList/types';
import { fetchTodoList, addTodo } from 'store/todoList/actions';

// Styles
import styles from './styles.module.scss';

interface TodoListProps {
  todoList: TodoListState,
  fetchTodoList: any,
  addTodo: any
}

function TodoList({ todoList, fetchTodoList, addTodo }: TodoListProps) {
  const [ inputValue, setInputValue ] = useState('');

  useEffect(() => {
    fetchTodoList();
  }, []);

  function submitTodoHandler(event: FormEvent) {
    event.preventDefault();

    // Validation
    if (inputValue === '') {
      return false;
    }

    addTodo(inputValue);

    // Clear input
    setInputValue('');
  }

  function changeValueHandler(event: FormEvent<HTMLInputElement>) {
    setInputValue(event.currentTarget.value);
  }

  return (
    <div className={styles['TodoList']}>
      <Form onSubmit={submitTodoHandler}>
        <Input value={inputValue} onChange={changeValueHandler} placeholder="My awesome todo" />
      </Form>

      <List
        size="small"
        bordered
        dataSource={todoList.items}
        renderItem={item => (<TodoItem todo={item} />)}
      />
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  todoList: state.todoList
});

export default connect(
  mapStateToProps,
  { fetchTodoList, addTodo }
)(TodoList);
