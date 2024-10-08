import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { UserProvider } from './components/Login/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </UserProvider>
    </PersistGate>
  </Provider>
);

reportWebVitals();
