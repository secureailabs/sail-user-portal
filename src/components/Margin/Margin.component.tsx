import React, { ReactElement } from 'react';

import { IMarginProps } from './Margin.types';

export const Margin: React.FC<IMarginProps> = ({
  size,
}: IMarginProps): ReactElement => <div className={`u-margin-bottom-${size}`} />;

export default Margin;
