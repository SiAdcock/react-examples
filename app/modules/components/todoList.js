import React from 'react';
import TodoListItem from './todoListItem.js';

const TodoList = React.createClass({
  getInitialState: function() {
    return {
      listItems: []
    };
  },
  render: function() {
    const listItemHtml = this.state.listItems.map((listItem) => {
      return (
        <TodoListItem key={listItem.id}>{listItem.text}</TodoListItem>
      );
    });
    return (
      <ul>
        {listItemHtml}
      </ul>
    );
  }
});

export default TodoList;
