'use strict';

let initialState = {
  items: []
};

export default (state, action) => {
  state = state || initialState;
  switch (action.type) {
    default:
      return state;
  }
};
