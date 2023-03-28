import React from 'react';

import type THighlightedValue from './HighlightedValue.types';

const HighlightedValue: React.FC<THighlightedValue> = ({ children }) => {
  return (
    <div className="highlighted-value">
      <div className="highlighted-value__background" />
      <p className="highlighted-value__text">{children}</p>
    </div>
  );
};

export default HighlightedValue;
