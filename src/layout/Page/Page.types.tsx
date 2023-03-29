import { ReactElement } from 'react';

type TPage = {
  pageType: 'center' | 'full';
  children: ReactElement;
  padding?: boolean;
};

export default TPage;
