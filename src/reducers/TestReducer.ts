import { createSlice } from '@reduxjs/toolkit';
import { ITest } from '@/types/type.TestReducer';

const initialState: ITest = {
  word: 'JavaScript',
};

export const TestReducer = createSlice({
  name: 'test',
  initialState,
  reducers: {
    ChangeWord: (state) => {
      if (state.word === 'JavaScript') {
        state.word = 'TypeScript';
      } else {
        state.word = 'JavaScript';
      }
    },
  },
});

export const { ChangeWord, } = TestReducer.actions;

export default TestReducer.reducer;
