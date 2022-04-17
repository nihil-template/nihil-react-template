import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import { store } from '@/store';
import TestPage from './pages/test';
import TestTestPage from './pages/testtest';

const ReduxApp = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/test/test' element={<TestTestPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

const root = createRoot(document.querySelector('#root'));
root.render(ReduxApp);
