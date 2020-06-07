import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import { fetchCollectionStart } from './shop/shop.saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(fetchCollectionStart);

export const persistor = persistStore(store);

export default { store, persistor };
