import React from 'react';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';

import { TLoginProps } from './Login.types';

import LoginForm from './Login.form';
import LoginSuccess from './Login.success';
import LoginFailure from './Login.failure';
import { AbsoluteSpinner } from 'src/components/Spinner';

const Login: React.FC<TLoginProps> = ({ signInReset, signInStart, status }) => {
  return (
    <ConditionalRender
      status={status}
      success={LoginSuccess}
      failure={() => <LoginFailure signInReset={signInReset} />}
      loading={<AbsoluteSpinner />}
    >
      <LoginForm signInReset={signInReset} signInStart={signInStart} />
    </ConditionalRender>
  );
};

export default Login;
