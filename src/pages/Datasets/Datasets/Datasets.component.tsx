import React from 'react';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';
import Spinner from 'src/components/Spinner/SpinnerOnly.component';
import { TDatasetsProps } from './Datasets.types';
import DatasetsSuccess from './Datasets.success';
import DatasetsFailure from './Datasets.failure';

const Datasets: React.FC<TDatasetsProps> = ({ status, getAllDatasetsData, error }) => (
  <ConditionalRender
    status={status}
    success={() =>
      <DatasetsSuccess getAllDatasetsData={getAllDatasetsData} />
    }
    failure={() =>
      <DatasetsFailure error={error}/>
    }>
    <Spinner />
  </ConditionalRender>
  );

export default Datasets;
