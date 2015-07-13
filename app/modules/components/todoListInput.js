'use strict';

import React from 'react';

const MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" placeholder="What to do?"/>
        <button type="button">Add</button>
      </div>
    );
  }
});

export default MyComponent;
