import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { IEmailAndPassword } from './Login.types';
import Login from './Login.component';
import { LoginSuccess_Out, OpenAPI } from 'src/client';
import { DefaultService, Body_login } from 'src/client';

const LoginContainer: React.FC = () => {

  async function post(data: IEmailAndPassword): Promise<LoginSuccess_Out> {
    OpenAPI.BASE = 'http://127.0.0.1:8000';
    var login_req: Body_login = {
      username: data.username,
      password: data.password,
    };
    var res = await DefaultService.login(login_req)
    OpenAPI.TOKEN = res.access_token;
    console.log(res);
    return res;
  }

  const queryClient = useQueryClient()
  // @ts-ignore
  const loginMutation = useMutation<LoginSuccess_Out, AxiosError>(post, { onSuccess: () => queryClient.invalidateQueries('userData') });

  return Login({ signInStart: loginMutation.mutate, signInReset: loginMutation.reset, status: loginMutation.status })
}

export default LoginContainer;
