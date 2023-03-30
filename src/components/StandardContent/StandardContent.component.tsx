import React from 'react';

import { useNavigate } from 'react-router-dom';

import Heading from 'src/components/Heading';
import type TStandardContent from './StandardContent.types';
import Margin from 'src/components/Margin';

const StandardContent: React.FC<TStandardContent> = ({
  title,
  children,
  HeaderButton = <></>,
  back
}) => {
  const navigate = useNavigate();

  return (
    <div className={'standard-content' + (back ? '--withback' : '')}>
      {back && (
        <div className="standard-content__back" onClick={() => navigate(-1)}>
          <div>&#8592;</div> <p>Back</p>
        </div>
      )}

      <div className="standard-content__header">
        <Heading size="h1">{title}</Heading>
        {HeaderButton}
      </div>
      <Margin size={8} />
      {children}
    </div>
  );
};

export default StandardContent;
