import React from 'react';
import TodoList from './todoList';
import TodoListInput from './todoListInput.js';


const MyComponent = React.createClass({
  render: () => {
    return (
      <div>
        <TodoList />
        <TodoListInput />
      </div>
    );
  }
});

export default MyComponent;
