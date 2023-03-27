import React from 'react';
import App from './App';
import './index.css';
import '@secureailabs/web-ui/css/style.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

const container = document.getElementById('root');
if (!container) {
  throw new Error('Container not found');
}

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
