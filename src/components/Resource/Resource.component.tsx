import React from 'react';

import type TResource from './Resource.types';

import Text from 'src/components/Text';
import Button from 'src/components/Button';

const Resource: React.FC<TResource> = ({
  Icon,
  primaryText,
  secondaryText,
  buttonText,
  buttonOnClickUrl,
  tileOnClick,
}) => {

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (buttonOnClickUrl)
    {
      window.location.href = buttonOnClickUrl;
    }
  }

  let className = "resource";
  className += tileOnClick ? " resource__is-active" : "";
  className += buttonText ? "" : " resource__no-button";
  return (
    <div className={className} onClick={tileOnClick}>
      <Icon className="resource__icon" />
      <Text
        className="resource__primary"
        fontStyle="normal"
        lineHeight={3}
        textAlign="center"
        fontWeight={600}
        fontSize="16px"
      >
        {primaryText}
      </Text>
      <Text
        className="resource__secondary"
        fontStyle="normal"
        lineHeight={5}
        fontWeight={400}
        textAlign="center"
        fontSize="12px"
      >
        {secondaryText}
      </Text>
      {
        buttonText ?
        <div className="resource__button">
          <Button button_type="secondary" full={false} onClick={handleButtonClick}>
            {buttonText}
          </Button>
        </div>
        : null
      }
    </div>
  );
};

export default Resource;
