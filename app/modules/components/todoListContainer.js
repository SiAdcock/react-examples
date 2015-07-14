'use strict';

import React from 'react';
import TodoList from './todoList';
import TodoListInput from './todoListInput.js';

const TodoListContainer = React.createClass({
  render: function() {
    return (
      <div>
        <TodoList />
        <TodoListInput />
      </div>
    );
  }
});

export default TodoListContainer;
