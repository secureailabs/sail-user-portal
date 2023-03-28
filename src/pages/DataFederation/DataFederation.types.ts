import {
  GetDataFederation_Out,
} from 'src/client';
import { AxiosError } from 'axios';

export type TDataFederationProps = {
  getDataFederationStart(data: GetDataFederation_Out['ID']): void;
  getDataFederationReset(): void;
  getDataFederationData: GetDataFederation_Out;
};

export type TDataFederationSuccessProps = {
  getDataFederationData: GetDataFederation_Out['DataFederation'];
};

export type TDataFederationError = {
  error: AxiosError<any> | null;
};
