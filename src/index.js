import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Importing our redux-promise middleware package
import ReduxPromise from "redux-promise";

import App from './components/app';
import reducers from './reducers';

// We add the middleware inside the applyMiddleware function.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
