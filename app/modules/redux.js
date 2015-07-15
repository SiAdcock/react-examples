
import { createRedux, createDispatcher, composeStores } from 'redux';

const create = (stores, initialState) => {
  const store = composeStores(stores);
  const dispatcher = createDispatcher(store);
  return createRedux(dispatcher, initialState);
};

export default create;
