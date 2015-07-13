'use strict';

import React from 'react';
import { Connector } from 'redux/react';
import TodoList from './todoList';
import TodoListInput from './todoListInput.js';

const TodoListContainer = React.createClass({
  render: function() {
    return (
      <Connector>
        {this.renderChild}
      </Connector>
    );
  },

  renderChild: function(state) {
    return (
      <div>
        <TodoList todos={state.todos.items} />
        <TodoListInput />
      </div>
    );
  }
});

export default TodoListContainer;
