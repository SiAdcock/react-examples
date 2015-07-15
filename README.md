# Isomorphic Todo Example in React and Redux - Step 2: Adding Components

## Installation and setup

Please follow the [installation guide](https://github.com/SiCurious/react-examples/wiki/Installation-and-setup) if you haven't already.

* Step 1: [Root Component]()
* Step 2: Adding Components
* Step 3: [Redux]()
* Step 4: [Store]()
* Step 5: [Action]()

## Overview

In this step, we're going to have some fun and create some React components.

## Todo List Item

First, we'll need a Todo List Item component.

```
$ cd app/modules/components
$ touch todoListItem.js
```

```javascript
// app/modules/components/todoListItem.js

'use strict';

import React from 'react';

const TodoListItem = React.createClass({
  render: function() {
    return (
      <li>{this.props.children}</li>
    );
  }
});

export default TodoListItem;
```

## Todo List

The Todo List will compose Todo List Items:

```
$ touch todoList.js
```

```javascript
// app/modules/components/todoList.js

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
```

## Todo List Input

We need a way of input new todo items

```
$ touch todoListInput.js
```

```javascript
// app/modules/components/todoListInput.js

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
```

## Todo List Container

Let's have the Todo List Container component build a Todo List component.

```javascript
// app/modules/components/todoListContainer.js

'use strict';

import React from 'react';
import TodoList from './todoList';
import TodoListInput from './todoListInput.js';

const TodoListContainer = React.createClass({
  render: function() {
    return (
      <div>
        <TodoList />
        <TodoListInput />
      </div>
    );
  }
});

export default TodoListContainer;
```

Let's take a look at Redux in [step 3]().