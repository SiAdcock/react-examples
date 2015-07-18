'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import add from '../actions/add';
import TodoList from './todoList';
import TodoListInput from './todoListInput';

const TodoListContainer = React.createClass({
  render: function() {
    return (
      <Connector>
        {this.renderChild}
      </Connector>
    );
  },

  renderChild: function(state) {
    const actions = bindActionCreators({add: add}, state.dispatch);
    console.log(state.todos);

    return (
      <div>
        <TodoList todos={state.todos.items} />
        <TodoListInput addTodo={actions.add} />
      </div>
    );
  }
});

export default TodoListContainer;
