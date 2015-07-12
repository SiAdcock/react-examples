import React from 'react';
import TodoListItem from './todoListItem.js';

const TodoList = React.createClass({
  render: () => {
    return (
      <ul>
        <TodoListItem/>
      </ul>
    );
  }
});

export default TodoList;
