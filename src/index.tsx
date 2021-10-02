import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '@/App';
import { store } from '@/store/store';
import TestPage from './pages/test';

const ReduxApp = (
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/test' component={TestPage} />
    </Router>
  </Provider>
);

render(ReduxApp, document.querySelector('#root'));
