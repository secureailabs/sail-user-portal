import React, { ReactElement } from 'react';

import type TPage from './Page.types';

const Page: React.FC<TPage> = ({
  pageType,
  children,
  padding
}): ReactElement => (
  <div className={`page page--${pageType} ${padding ? 'page--padding' : ''} `}>
    {children}
  </div>
);

export default Page;
