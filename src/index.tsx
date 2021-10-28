import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '@/App';
import { store } from '@/store';
import TestPage from './pages/test';
import TestTestPage from './pages/testtest';

const ReduxApp = (
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App} />
      <Route exact path='/test' component={TestPage} />
      <Route path='/test/test' component={TestTestPage} />
    </Router>
  </Provider>
);

render(ReduxApp, document.querySelector('#root'));
