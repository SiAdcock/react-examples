'use strict';

import React from 'react';
import TodoListItem from './todoListItem.js';

const TodoList = React.createClass({
  render: function() {
    return (
      <ul>
        <TodoListItem key='item1'>Dummy Todo List Item</TodoListItem>
      </ul>
    );
  }
});

export default TodoList;
