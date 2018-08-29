import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';

import * as counterActions from './actions/counterAction';
console.log(counterActions);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

store.subscribe(() => console.log(`state`, store.getState()));
console.log(1);
store.dispatch(counterActions.increment());
console.log(2);
store.dispatch(counterActions.increment());
console.log(3);
store.dispatch(counterActions.increment());
console.log(4);
store.dispatch(counterActions.reset());
console.log(5);
store.dispatch({ type: 'sdfdsf_dsfsd' });
console.log(6);
store.dispatch(counterActions.increment());
