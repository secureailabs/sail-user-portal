import { ReactElement } from 'react';

type StandardContent = {
  title: string;
  children: ReactElement;
  HeaderButton?: ReactElement;
  back?: boolean;
};

export default StandardContent;
