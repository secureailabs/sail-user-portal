import React from 'react';
import './sass/main.scss';
import AppRouter from 'src/routes/App.routes';
import { AppProps } from './App.types';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addLocale(en);
TimeAgo.setDefaultLocale('en');

const App: React.FC<AppProps> = ({
}) => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
