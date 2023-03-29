import React from 'react';

import type TImageBackground from './ImageBackground.types';

const ImageBackground: React.FC<TImageBackground> = ({ children, image }) => {
  return (
    <div className="image-background">
      <img src={image} className="image-background__image" />
      <div className="image-background__content">{children}</div>
    </div>
  );
};

export default ImageBackground;
