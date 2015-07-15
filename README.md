# Isomorphic Todo Example in React and Redux

# Step 1: Root Component

## Installation and setup

Please follow the [installation guide](https://github.com/SiCurious/react-examples/wiki/Installation-and-setup) if you haven't already.

* Step 1: Root Component
* [Step 2: Adding Components](https://github.com/SiCurious/react-examples/tree/flux-todo/step-2)
* [Step 3: Redux](https://github.com/SiCurious/react-examples/tree/flux-todo/step-3)
* [Step 4: Store](https://github.com/SiCurious/react-examples/tree/flux-todo/step-4)
* [Step 5: Action](https://github.com/SiCurious/react-examples/tree/flux-todo/step-5)

Switch to the branch for this example:

```
$ git checkout flux-todo/step-1
```

## Overview

Here we have a boilerplate project.

#### `gulpfile.js` and `lib/tasks/`

For task automation using [Gulp](http://gulpjs.com/).

#### `webpack.config.js` and `webpack.config.dev.js`

Production and development versions of our [Webpack](http://webpack.github.io/) configuration.

#### `index.js`

An initialisation script, that kicks off the server. It also imports Babel for transpiling JSX, ES6 and any other
supported syntax extensions we may need.

#### `server/index.js`

Kicks off our server.

#### `server/render.js`

Pre-renders our HTML. The resulting HTML is sent to the client by `server/index.js`

#### `client/index.js`

Entry point into the application. Renders our components on the client.

#### `app/modules/index.js`

A top-level component, that defines the HTML page onto which our application will be added. Loads our dev scripts and
static assets. Injects markup into the page and attached the state of the application passed down from the server to a
global variable called `__data`. This will allow us to make further page updates on the client side, without needing to
call the server.

## Todo List Container

Currently our React application consists of an uninteresting `<div>` tag, which is built in `server/index.js` and 
in `client/index.js`. Let's turn this into a React component.

```
$ cd app/modules
$ mkdir components
$ cd components
$ touch todoListContainer.js
```

```javascript
// app/modules/components/todoListContainer.js

'use strict';

import React from 'react';

const TodoListContainer = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li>List Item 1</li>
        </ul>
      </div>
    );
  }
});

export default TodoListContainer;
```

This will serve as the root component of our React application. Let's pre-render this component on the server:

```javascript
// server/render.js

// ...

import TodoListContainer from '../app/modules/components/todoListContainer';

const render = () => {
  const markup = React.renderToString(<TodoListContainer/>);

// ...
```

And for re-rendering on the client:

```javascript
// client/index.js

import TodoListContainer from './../app/modules/components/todoListContainer.js';

React.render(<TodoListContainer />,
  document.getElementById('container')
);
```

Now we're ready for [step 2](https://github.com/SiCurious/react-examples/tree/flux-todo/step-2).