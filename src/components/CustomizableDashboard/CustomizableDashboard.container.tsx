/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import Customizabledashboard from './CustomizableDashboard.component';
import { useQueryClient } from 'react-query';

const CustomizableDashboardContainer: React.FC = () => {
  return Customizabledashboard({
    // @ts-ignore
    userData: useQueryClient().getQueryData('userData')
  });
};

export default CustomizableDashboardContainer;
