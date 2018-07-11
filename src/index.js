import './index.css';
import "typeface-roboto";
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import App from './App';
import cardReducer from './card/reducers';
import {Provider} from "react-redux";

const store = createStore(cardReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
