import React from 'react';
import DataFederationSuccess from './DataFederation.success';
import DataFederationFailure from './DataFederation.failure';
import { AxiosError } from 'axios';
import Spinner from 'src/components/Spinner/SpinnerOnly.component';
import StandardContent from 'src/components/StandardContent';
import { useQuery } from 'react-query';
import { DefaultService, GetDataFederation_Out } from 'src/client';

const DataFederation: React.FC = () => {

  const getFederation = async (): Promise<GetDataFederation_Out> => {
    const allFederations = await DefaultService.getAllDataFederations();
    console.log(allFederations);
    // @ts-ignore
    const id = allFederations.data_federations?.[0]?.id!;
    return await DefaultService.getDataFederation(id);
  }
  const queryResult = useQuery<GetDataFederation_Out, AxiosError>(['federation'], () => getFederation());

  if (queryResult.isLoading) {
    return <><Spinner /></>
  }
  if (queryResult.isError) {
    return <DataFederationFailure error={queryResult.error} />
  }
  if (!queryResult.data) {
    return <DataFederationFailure error={"No Data Federation found"}/>
  }

  return (
    <StandardContent title={queryResult.data?.name!}>
      <DataFederationSuccess {...queryResult.data} />
    </StandardContent>
  )
};

export default DataFederation;
