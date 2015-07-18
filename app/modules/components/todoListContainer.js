'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import add from '../actions/add';
import TodoList from './todoList';
import TodoListInput from './todoListInput';

@connect(state => ({
  todos: state.todos
}))
class TodoListContainer {
  render() {
    const { dispatch, todos } = this.props;
    const actions = bindActionCreators({add: add}, dispatch);
    return (
      <div>
        <TodoList todos={todos} />
        <TodoListInput addTodo={actions.add} />
      </div>
    );
  }
};

export default TodoListContainer;
