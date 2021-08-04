import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from '@/App';
import { store } from '@/store/store';

const ReduxApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(ReduxApp, document.querySelector('#root'));
