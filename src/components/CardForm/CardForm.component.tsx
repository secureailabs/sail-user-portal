import React from 'react';

import type TCard from './CardForm.types';

import Margin from 'src/components/Margin';

const Card: React.FC<TCard> = ({ image, children }) => {
  return (
    <div className="cardForm">
      {image ? <img src={image} className="cardForm__image" /> : <></>}
      <Margin size={16} />
      <div className="cardForm__content">{children}</div>
    </div>
  );
};

export default Card;
