import React, { ReactElement } from 'react';

import { IHeadingProps } from './Heading.types';

import {
  colorPicker,
  letterSpacingPicker,
  lineHeightPicker,
} from 'src/utils/index';

export const Heading: React.FC<IHeadingProps> = ({
  children,
  size = 'h1',
  fontWeight = 400,
  textAlign,
  textDecoration,
  letterSpacing = 'normal',
  lineHeight = 6,
  className,
  inline = false,
  color = 'black',
  fontStyle,
}): ReactElement => {
  const styleSwitch: () => string = (): string => {
    className = `${className} heading`;
    if (inline) {
      className = `${className} heading--inline`;
    }

    return className;
  };

  const styleMaker = (): any => ({
    color: colorPicker(color),
    fontWeight,
    letterSpacing: letterSpacing && letterSpacingPicker({ letterSpacing }),
    lineHeight: lineHeight && lineHeightPicker({ lineHeight }),
    textAlign,
    fontStyle,
    textDecoration,
  });

  const renderSwitch = (
    headingSize: string,
    text: string,
    styling: string
  ): ReactElement => {
    switch (headingSize) {
      case 'h1':
        return (
          <h1 style={{ ...styleMaker() }} className={styling}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 style={{ ...styleMaker() }} className={styling}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 style={{ ...styleMaker() }} className={styling}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 style={{ ...styleMaker() }} className={styling}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 style={{ ...styleMaker() }} className={styling}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 style={{ ...styleMaker() }} className={styling}>
            {text}
          </h6>
        );
      default:
        return (
          <h1 style={{ ...styleMaker() }} className={styling}>
            {text}
          </h1>
        );
    }
  };

  return renderSwitch(size, children, styleSwitch());
};

export default Heading;
