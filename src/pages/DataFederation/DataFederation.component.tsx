import React from 'react';
import { TDataFederationProps } from './DataFederation.types';
import DataFederationSuccess from './DataFederation.success';
import DataFederationFailure from './DataFederation.failure';
import { AxiosError } from 'axios';
import { useParams } from 'react-router';
import Spinner from 'src/components/Spinner/SpinnerOnly.component';
import StandardContent from 'src/components/StandardContent';
import { useQuery } from 'react-query';
import { DefaultService, GetDataFederation_Out } from 'src/client';

const DataFederation: React.FC<TDataFederationProps> = () => {
  const { id } = useParams();

  const fetch = async (): Promise<GetDataFederation_Out> => {
    return await DefaultService.getDataFederation(id || "")
  }

  const { data, isLoading, status, error } =
    useQuery<GetDataFederation_Out['DataFederation'], AxiosError>(['unified'], () => fetch());

  if (isLoading) {
    return <><Spinner /></>
  }
  if (status === 'success' && data) {
    console.log(data)
    return (
      <StandardContent title={data.Name}>
        <DataFederationSuccess
          getDataFederationData={data}
        />
      </StandardContent>
    )
  }
  return <DataFederationFailure error={error} />

};
export default DataFederation;
