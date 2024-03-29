import React from 'react';
import ReactDOM from 'react-dom'
import campaignsReducer from './reducers/campaignsReducer';
import App from './App';

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';


const store = createStore(campaignsReducer, applyMiddleware(thunk))

ReactDOM.render(
<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>,
   document.getElementById('root')
   );



