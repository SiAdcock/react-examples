'use strict';

import React from 'react';

const MyComponent = React.createClass({
  handleAddTodo: function() {
    var newTodo = this.refs.todoField.getDOMNode().value;
    this.props.add(newTodo);
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="todoField" placeholder="What to do?"/>
        <button type="button" onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }
});

export default MyComponent;
