import React from 'react';
import { css } from '@emotion/react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const TestPage = ({ location, }: RouteComponentProps) => {
  const style = css`
    color: #ffffff;
    background-color: #333333;
    padding: 10px;
    margin-bottom: 10px;
  `;

  return (
    <>
      <div css={style}>{location.pathname}</div>
      <div>테스트</div>
      <p>
        <Link to='/'>
          홈 페이지
        </Link>
      </p>
    </>
  );
};

export default TestPage;
