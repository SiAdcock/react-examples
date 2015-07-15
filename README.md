# Isomorphic Todo Example in React and Redux - Step 5: Action

## Installation and setup

Please follow the [installation guide](https://github.com/SiCurious/react-examples/wiki/Installation-and-setup) if you haven't already.

* Step 1: [Root Component]()
* Step 2: [Adding Components]()
* Step 3: [Redux]()
* Step 4: [Store]()
* Step 5: Action

## Overview

In the final example, we will create an action that adds an item to the Todo list.

## Constants

Lets create a directory under `modules/` to hold application constants.

```
$ cd app/modules
$ mkdir constants
```

Our first set of constants will be `actionTypes`. Every action has a type. Stores use it to determine how to transform 
data.

```
$ cd constants
$ touch actionTypes.js 
```

We'll just define the one action type for now:

```javascript

// app/modules/constants/actionTypes.js
'use strict';

export const ADD = 'ADD';
```

## Actions and action creators

Our action creator will sit under an `actions/` directory under `modules/`:

```
$ cd ..
$ mkdir actions
$ touch add.js
```

In Redux, actions are created by calling action creator functions directly. When the action creator function is called, 
the dispatcher passes the returned object (the action) to the stores. This all happens under the hood. 

The action returned by the action creator should have an action type property, so the store will know what to do with
it. We are also going to specify a text property, which will hold the text of the todo item.

```javascript
// app/modules/actions/add.js

'use strict';

import { ADD } from '../constants/actionTypes.js';

export default function(text) {
  return {
    type: ADD,
    text: text
  };
}
```

## Listening for the action in the store

To listen for the action, we simply extend the switch statement in the store. We also need to import the action type 
constants. We'll also track the ID of the todo item in a simplistic way.

```javascript
// app/modules/store/todos.js

import { ADD } from '../constants/actionTypes.js';

let initialState = {
  items: []
};
let nextId = 1;

export default (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case ADD:
      return {
        items: [{
          id: 'item' + ++nextId,
          text: action.text
        }].concat(state.items)
      };
    default:
      return state;
  }
  
// ...
```

## Bind the action creator

We need to bind action creators to the dispatcher's dispatch method. We can do this in the todo list container's 
`renderChild` method.

```javascript
// app/modules/components/todoListContainer.js

import add from '../actions/add';
import { bindActionCreators } from 'redux';

// ...

  renderChild: function(state) {
    const actions = bindActionCreators({add: add}, state.dispatch);
    return (
      <div>
        <TodoList todos={state.todos.items} />
        <TodoListInput addTodo={actions.add} />
      </div>
    );
  }

// ...
```

Notice how we are passing the newly-bound `add` action creator as a `prop` down to the todo list input component.

## Calling the action creator

The action creator is now accessible in the todo list input component on `this.props`. We can easily call the action 
creator, passing the text value of the todo input field.

```javascript
// app/modules/components/todoListInput.js

// ...

  handleAddTodo: function() {
    var newTodo = this.refs.todoField.getDOMNode().value;
    this.props.addTodo(newTodo);
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="todoField" placeholder="What to do?"/>
        <button type="button" onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }

// ...
```

Fire up the application and give it a test. Notice what happens when you complete the input feld and click the button.
Can you think of any ways to improve the user experience?
