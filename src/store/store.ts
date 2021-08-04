import { configureStore } from '@reduxjs/toolkit';
import TestReducer from '@/reducers/TestReducer';

export const store = configureStore({
  reducer: {
    test: TestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { createStore, applyMiddleware } from 'redux';
// import MainReducer from '@/reducers/MainReducer';
// import thunk from 'redux-thunk';
//
// export const Store = createStore(
//   MainReducer,
//   {},
//   applyMiddleware(thunk),
// );
