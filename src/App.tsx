import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { RootState, AppDispatch } from '@/store';
import { ChangeWord } from '@/reducers/TestReducer';

const App = ({ location, }: RouteComponentProps) => {
  const word = useSelector((rootState: RootState) => rootState.test.word);
  const dispatch = useDispatch<AppDispatch>();

  const onClickButton = useCallback(() => {
    dispatch(ChangeWord());
  }, [ word, ]);

  const style = css`
    color: #ffffff;
    background-color: #333333;
    padding: 10px;
    margin-bottom: 10px;
  `;

  return (
    <>
      <div css={style}>{location.pathname}</div>
      <div css={style}>Hello {word}!!</div>
      <button type='button' onClick={onClickButton}>클릭해서 변경</button>
      <br />
      <p>
        <Link to='/test'>
          테스트 페이지
        </Link>
      </p>
      <p>
        <Link to='/test/test'>
          테스트테스트 페이지
        </Link>
      </p>
    </>
  );
};

export default App;
