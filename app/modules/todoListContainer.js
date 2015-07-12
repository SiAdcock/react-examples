import React from 'react';
import TodoList from './todoList';

const MyComponent = React.createClass({
  render: () => {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
});

export default MyComponent;
