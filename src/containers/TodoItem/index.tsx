import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import classNames from 'classnames';
import { FaTrash } from 'react-icons/fa';

// Components
import Radio from 'components/Radio';

// Store
import { TodoItem } from 'store/todoList/types';
import { toggleTodoStatus, removeTodo } from 'store/todoList/actions';

// Styles
import styles from './styles.module.scss';

interface TodoItemProps {
  todo: TodoItem
  toggleTodoStatus: any,
  removeTodo: any
}

function Todo({ todo, toggleTodoStatus, removeTodo }: TodoItemProps) {
  
  const toggleTodoStatusHandler = (todoId: string, checked: boolean) => () => {
    toggleTodoStatus(todoId, checked);
  }

  const removeTodoHandler = (todoId: string) => () => {
    removeTodo(todoId);
  };

  return (
    <List.Item
      className={classNames(styles['TodoItem'], { [styles['done']]: todo.checked })}
    >
      <Radio
        checked={todo.checked}
        onToggle={toggleTodoStatusHandler(todo.id, !todo.checked)}
      />
      {todo.text}
      <FaTrash onClick={removeTodoHandler(todo.id)} />
    </List.Item>
  );
}

export default connect(
  null,
  { toggleTodoStatus, removeTodo }
)(Todo);
