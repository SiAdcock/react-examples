# Isomorphic Todo Example in React and Redux

# Step 3: Redux

## Installation and setup

Please follow the [installation guide](https://github.com/SiCurious/react-examples/wiki/Installation-and-setup) if you haven't already.

* [Step 1: Root Component](https://github.com/SiCurious/react-examples/tree/flux-todo/step-1)
* [Step 2: Adding Components](https://github.com/SiCurious/react-examples/tree/flux-todo/step-2)
* Step 3: Redux
* [Step 4: Store](https://github.com/SiCurious/react-examples/tree/flux-todo/step-4)
* [Step 5: Action](https://github.com/SiCurious/react-examples/tree/flux-todo/step-5)

Switch to the branch for this example:

```
$ git checkout flux-todo/step-3
```

## Overview

Now that we have some components, let's start implementing the Flux architecture using Redux.

## Server

In the server's render method, we'll create a Redux object. We'll pass this into Redux's `Provider` component, which wraps
our Todo List Container. We also need to pass the state of the application, owned by Redux's dispatcher, as a prop to the
HTMLComponent.

```javascript
// server/render.js

// ...

import { createRedux } from 'redux';
import { Provider } from 'redux/react';

const render = () => {
  const redux = createRedux({});
  const markup = React.renderToString(
    <Provider redux={redux}>
      {()=><TodoListContainer/>}
    </Provider>
  );
  const props = {
    dehydratedState: redux.getState(),
    markup: markup
  };
  const html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};
// ...
```

The empty object we pass to `createRedux` is a placeholder for a store that we'll add in a future step.

## Client

Similar to the server, we need to create a Redux object on the client, and wrap the Todo List Container in a `Provider` component.

```javascript
// client/index.js

// ...

import { createRedux } from 'redux';
import { Provider } from 'redux/react';

const initialState = window.__data;
const redux = createRedux({}, initialState);

React.render(
  <Provider redux={redux}>
    {()=><TodoListContainer />}
  </Provider>,
  document.getElementById('container')
);
```

Additionally, we retrieve the initial state from the window global (we added it to the global in the HTMLComponent) 
and pass it into the `createRedux` function.

Now let's create our store in [step 4](https://github.com/SiCurious/react-examples/tree/flux-todo/step-4).