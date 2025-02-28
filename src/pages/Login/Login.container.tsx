import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { IEmailAndPassword } from './Login.types';
import Login from './Login.component';
import { LoginSuccess_Out, OpenAPI } from 'src/client';
import { DefaultService, Body_login } from 'src/client';
import { UserRole } from 'src/client';
import { useNavigate } from 'react-router-dom';

const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  async function post(data: IEmailAndPassword): Promise<LoginSuccess_Out> {
    // OpenAPI.BASE = 'https://172.20.100.8:8000';
    if (!process.env.REACT_APP_SAIL_API_SERVICE_URL)
      throw new Error('REACT_APP_SAIL_API_SERVICE_URL not set');

    OpenAPI.BASE = process.env.REACT_APP_SAIL_API_SERVICE_URL;
    const login_req: Body_login = {
      username: data.username,
      password: data.password
    };
    const res = await DefaultService.login(login_req);
    OpenAPI.TOKEN = res.access_token;
    localStorage.setItem('token', res.access_token);

    const user_info = await DefaultService.getCurrentUserInfo();
    if (user_info.roles.includes(UserRole.DATA_SUBMITTER)) {
      navigate('/dashboard/datasets');
    } else if (user_info.roles.includes(UserRole.RESEARCHER)) {
      navigate('/dashboard/researcher-portal');
    } else {
      navigate('/dashboard');
    }

    return res;
  }

  const queryClient = useQueryClient();
  // @ts-ignore
  const loginMutation = useMutation<LoginSuccess_Out, AxiosError>(post, {
    onSuccess: () => queryClient.invalidateQueries('userData')
  });

  return Login({
    signInStart: loginMutation.mutate,
    signInReset: loginMutation.reset,
    status: loginMutation.status
  });
};

export default LoginContainer;
