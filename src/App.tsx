import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { ChangeWord } from '@/reducers/TestReducer';

const App = () => {
  const word = useSelector((rootState: RootState) => rootState.test.word);
  const dispatch = useDispatch<AppDispatch>();
  
  const onClickButton = useCallback(() => {
    dispatch(ChangeWord());
  }, [word]);
  
  const style = css`
    color: #ffffff;
    background-color: #333333;
    padding: 10px;
    margin-bottom: 10px;
  `;
  
  return (
    <>
      <div css={style}>Hello {word}!!</div>
      <button type="button" onClick={onClickButton}>클릭해서 변경</button>
    </>
  );
};

export default App;
