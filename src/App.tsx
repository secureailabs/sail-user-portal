import React from 'react';
import './sass/main.scss';
import AppRouter from 'src/routes/App.routes';
import { AppProps } from './App.types';
import { useQuery } from 'react-query';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { ApiError, DefaultService, OpenAPI, UserInfo_Out } from 'src/client';

TimeAgo.addLocale(en);
TimeAgo.setDefaultLocale('en');

const checkUserSession = async (): Promise<UserInfo_Out> => {
  if (!process.env.REACT_APP_SAIL_API_SERVICE_URL)
    throw new Error('REACT_APP_SAIL_API_SERVICE_URL not set');
  OpenAPI.BASE = process.env.REACT_APP_SAIL_API_SERVICE_URL;

  const token = localStorage.getItem('token');
  if (token) {
    OpenAPI.TOKEN = token;
    const res = await DefaultService.getCurrentUserInfo();
    return res;
  } else throw new Error('No token found');
};

export const logoutApi = async () => {
  OpenAPI.TOKEN = '';
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');
};

const App: React.FC<AppProps> = () => {
  useQuery<UserInfo_Out, ApiError>('userData', checkUserSession, {
    retry: false,
    refetchInterval: Infinity,
    staleTime: Infinity
  });

  return <AppRouter />;
};

export default App;
