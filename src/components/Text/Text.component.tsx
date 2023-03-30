import React, { ReactElement } from 'react';

import {
  colorPicker,
  letterSpacingPicker,
  lineHeightPicker,
  transitionSupport
} from 'src/utils';

import TText from './Text.types';

export const Text: React.FC<TText> = ({
  children,
  fontSize = '1.4rem',
  fontWeight = 500,
  fontStyle,
  letterSpacing,
  lineHeight = 6,
  color = 'black',
  onMouseEnter,
  onMouseLeave,
  onBlur,
  onClick,
  onFocus,
  transitionDelay,
  transitionDuration,
  transitionTimingFunction,
  textAlign,
  className = ''
}): ReactElement => {
  const styleSwitch: () => string = (): string => {
    const class_name = `text ${className}`;
    return class_name;
  };

  return (
    <p
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      style={{
        fontSize,
        fontStyle,
        fontWeight,
        letterSpacing: letterSpacing && letterSpacingPicker({ letterSpacing }),
        textAlign,
        lineHeight: lineHeight && lineHeightPicker({ lineHeight }),
        color: color && colorPicker(color),
        ...transitionSupport({
          transitionDelay,
          transitionDuration,
          transitionTimingFunction
        })
      }}
      className={styleSwitch()}
    >
      {children}
    </p>
  );
};

export default Text;
