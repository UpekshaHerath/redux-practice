import {Provider} from 'react-redux'; // provider have to use to wrap the whole app and make the store.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './App/store'; // have to import the created store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* have to create the store and this is why we can access the store from any component in the application. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
