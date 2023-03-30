/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import './sass/main.scss';
import AppRouter from 'src/routes/App.routes';
import { AppProps } from './App.types';
import { useQuery } from 'react-query';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import {
  DefaultService,
  OpenAPI,
  RefreshToken_In,
  UserInfo_Out
} from 'src/client';

TimeAgo.addLocale(en);
TimeAgo.setDefaultLocale('en');

export const checkUserSession = async (): Promise<UserInfo_Out> => {
  try {
    const res = await DefaultService.getCurrentUserInfo();
    console.log('res', res);
    console.log('res', res.id);
    return res;
  } catch {
    if (typeof OpenAPI.TOKEN === 'string') {
      const refresh_token_req: RefreshToken_In = {
        refresh_token: OpenAPI.TOKEN
      };
      const res = await DefaultService.getRefreshToken(refresh_token_req);
      OpenAPI.TOKEN = res.access_token;
      const response = await DefaultService.getCurrentUserInfo();
      return response;
    } else {
      throw new Error('No token found');
    }
  }
};

export const logoutApi = async () => {
  OpenAPI.TOKEN = '';
};

const App: React.FC<AppProps> = () => {
  // @ts-ignore
  useQuery<UserInfo_Out, AxiosError>(['userData'], checkUserSession, {
    retry: false,
    refetchInterval: 600000,
    staleTime: 600000
  });

  return <AppRouter />;
};

export default App;
