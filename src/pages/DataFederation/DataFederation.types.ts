import {
  GetDataFederation_Out,
} from 'src/client';
import { AxiosError } from 'axios';

export type TDataFederationError = {
  error: string | AxiosError;
};
