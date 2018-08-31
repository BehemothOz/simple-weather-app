import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// test weather fetch
// store.subscribe(() => console.log(store.))
// store.dispatch(weatherActions.selectCity('reactjs'));
// store
//   .dispatch(weatherActions.fetchWeather(2))
//   .then(() => console.log(store.getState()));
