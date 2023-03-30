/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import type TCard from './Card.types';

import Text from 'src/components/Text';

const Card: React.FC<TCard> = ({
  children,
  primaryText,
  secondaryText,
  secondaryTextOnClick = () => {},
  secondaryTextColor = 'primary',
  containerHeight,
  widthMaxContent
}) => {
  return (
    <div
      className={`card ${containerHeight ? 'card--container-height' : ''} ${
        widthMaxContent ? 'card--width-max-content' : ''
      }`}
    >
      {primaryText || secondaryText ? (
        <div className="card__top">
          <Text lineHeight={4} fontSize="1.5rem" fontWeight={600}>
            {primaryText}
          </Text>
          {secondaryText ? (
            <Text
              lineHeight={4}
              color={secondaryTextColor}
              fontSize="1.2rem"
              fontWeight={500}
              onClick={secondaryTextOnClick}
            >
              {secondaryText}
            </Text>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      {children && <div className="card__content">{children}</div>}
    </div>
  );
};

export default Card;
