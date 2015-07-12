import React from 'react';
import TodoListItem from './todoListItem.js';

const TodoList = React.createClass({
  getInitialState: function() {
    return {
      listItems: [
        {
          id: 'item1',
          text: 'List Item 1'
        },
        {
          id: 'item2',
          text: 'List Item 2'
      }]
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
