import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '@secureailabs/web-ui/css/style.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
