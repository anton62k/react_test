import './index.css';
import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import cardReducer from './card/reducers';
import registerServiceWorker from './registerServiceWorker';
import { fetchISIN } from './card/actions/index';

const store = createStore(cardReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

store.dispatch(fetchISIN());
