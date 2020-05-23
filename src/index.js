// essentials
import React from 'react';
import ReactDOM from 'react-dom';

// App component has rendered all the routes
import App from './Components/App';

// provider component makes the store available to the app
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';

// configuring redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// creating state store for redux
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));