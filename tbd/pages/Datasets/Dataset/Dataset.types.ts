import { AxiosError } from 'axios';
import { IConditionalRender } from 'components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { GetDataset_Out } from 'client';

export type TDatasetProps = {
  status: IConditionalRender['status'];
  getDatasetData: GetDataset_Out;
  error: AxiosError<any>;
};

export type TDatasetSuccessProps = {
  getDatasetData: GetDataset_Out;
};


export type TDatasetFailure = {
  error: AxiosError<any> | null
}