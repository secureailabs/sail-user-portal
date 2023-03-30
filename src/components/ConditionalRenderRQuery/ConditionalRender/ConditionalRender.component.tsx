/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement } from 'react';

import Spinner, { SpinnerOnly } from '../../Spinner';

import { IConditionalRender } from './ConditionalRender.types';

const ConditionalRender: React.FC<IConditionalRender> = ({
  status,
  success,
  failure,
  loading,
  children,
  spinnerOnly = false
}): ReactElement => {
  switch (status) {
    case 'success':
      return <>{success()}</>;
    case 'error':
      return <>{failure()}</>;
    case 'loading':
      //@ts-ignore
      return loading ? loading : spinnerOnly ? <SpinnerOnly /> : <Spinner />;
    default:
      return <>{children}</>;
  }
};

export default ConditionalRender;
