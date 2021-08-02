import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { Word } from '@/atoms/Word';

const App = () => {
  const [ word, setWord, ] = useRecoilState(Word);
  
  const onClickButton = useCallback(() => {
    switch (word) {
      case 'JavaScript':
        setWord('TypeScript');
        break;
      case 'TypeScript':
        setWord('JavaScript');
        break;
      default:
        break;
    }
  }, [setWord, word]);
  
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
