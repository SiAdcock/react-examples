import React from 'react';
import TodoList from './todoList';
import TodoListInput from './todoListInput.js';
import { Connector } from 'redux/react';
import { bindActionCreators } from 'redux';
import { add } from '../actions/add';

const TodoListContainer = React.createClass({
  render: function() {
    return (
      <Connector>
        {this.renderChild}
      </Connector>
    );
  },

  renderChild: function(state) {
    const actions = bindActionCreators(add, state.dispatch);
    
    return (
      <div>
        <TodoList todos={state.todos.items} />
        <TodoListInput addTodo={actions.add} />
      </div>
    );
  }
});

export default TodoListContainer;
