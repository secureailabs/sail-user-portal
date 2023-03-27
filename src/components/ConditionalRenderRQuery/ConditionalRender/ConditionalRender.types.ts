import React from 'react';

export interface IConditionalRender {
  spinnerOnly?: boolean;
  status: 'success' | 'error' | 'loading' | 'idle';
  children: React.FC | JSX.Element;
  failure(): React.FC | JSX.Element;
  success(): React.FC | JSX.Element;
  loading?: React.FC | JSX.Element;
}
