# Isomorphic Todo Example in React and Redux

# Step 4: Store

## Installation and setup

Please follow the [installation guide](https://github.com/SiCurious/react-examples/wiki/Installation-and-setup) if you haven't already.

* [Step 1: Root Component](https://github.com/SiCurious/react-examples/tree/flux-todo/step-1)
* [Step 2: Adding Components](https://github.com/SiCurious/react-examples/tree/flux-todo/step-2)
* [Step 3: Redux](https://github.com/SiCurious/react-examples/tree/flux-todo/step-3)
* Step 4: Store
* [Step 5: Action](https://github.com/SiCurious/react-examples/tree/flux-todo/step-5)

Switch to the branch for this example:

```
$ git checkout flux-todo/step-4
```

## Overview

In this example, we will create a store that manages the state of the Todo List. Our Todo List component will be populated
from the store.

## Store

Create a directory under `modules/` to hold stores.

```
$ cd app/modules
$ mkdir stores
$ cd stores
$ touch todos.js 
```

We'll define an initial state for our todo list. This will take the form of an object with a property called `items`, an
array of todo list items.

```javascript
// app/modules/stores/todos.js
'use strict';

let initialState = {
  items: [{
    text: 'Dummy list item',
    id: 'item1'
  }]
};

export default (state, action) => {
  state = state || initialState;
  switch (action.type) {
    default:
      return state;
  }
};
```

The store is a function which expects a state and an action. It is called by the dispatcher when an action is created.
The dispatcher owns the state of the application. The store provides a means of transforming that state. For now, we don't
care what action occurs, we'll always return the current state without performing any transformation.

## Registering the store

The store needs to be registered with the dispatcher. We do this when we create the `redux` object on intial render.
Remember, this application is pre-rendered on the server, but can also be rendered on the client.

```javascript
// server/render.js

// ...

import TodoStore from '../app/modules/stores/todos';

const render = () => {
  const redux = createRedux({todos: TodoStore});

// client/index.js

// ...
import TodoStore from './../app/modules/stores/todos';

const initialState = window.__data;
const redux = createRedux({ todos: TodoStore }, initialState);

// ...
```

## Hook up the Todo List component

We are going to pass the state of the todo list into the Todo List component as a prop, but first we must retrieve the 
state using redux's Connector component. We'll do this in the Todo List Container component.

```javascript
// app/modules/components/todoListContainer.js

'use strict';

import React from 'react';
import { Connector } from 'redux/react';
import TodoList from './todoList';
import TodoListInput from './todoListInput.js';

const TodoListContainer = React.createClass({
  render: function() {
    return (
      <Connector>
        {this.renderChild}
      </Connector>
    );
  },

  renderChild: function(state) {
    return (
      <div>
        <TodoList todos={state.todos.items} />
        <TodoListInput />
      </div>
    );
  }
});

export default TodoListContainer;
```
Finally, we'll map the contents of the Todo List's `this.props.todos` into a JSX list:

```javascript
// app/modules/components/todoList.js

'use strict';

import React from 'react';
import TodoListItem from './todoListItem.js';

const TodoList = React.createClass({
  render: function() {
    const listItemHtml = this.props.todos.map((listItem) => {
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
```

Now for the finale, on to [step 5](https://github.com/SiCurious/react-examples/tree/flux-todo/step-5).