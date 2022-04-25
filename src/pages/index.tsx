import React from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';

const Holy: React.FC = () => (
  <div
    id="holy"
    css={css`
      color: red;
    `}
  >
    Designed by sunwoo in californium
  </div>
);

const Home: NextPage = () => {
  return <Holy />;
};

export default Home;
