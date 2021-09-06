import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import misReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';


const miStore = createStore(
  misReducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={miStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);