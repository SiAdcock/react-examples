'use strict';

import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todoList';
import TodoListInput from './todoListInput';

@connect(state => ({
  todos: state.todos
}))
class TodoListContainer {
  render() {
    const { dispatch, todos } = this.props;
    return (
      <div>
        <TodoList todos={todos} />
        <TodoListInput dispatch={dispatch} />
      </div>
    );
  }
};

export default TodoListContainer;
