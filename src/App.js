import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';
import history from './services/history';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
