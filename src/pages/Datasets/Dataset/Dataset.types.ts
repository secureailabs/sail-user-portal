import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError, GetDataset_Out } from 'src/client';

export type TDatasetProps = {
  status: IConditionalRender['status'];
  getDatasetData: GetDataset_Out;
  error: ApiError;
};

export type TDatasetSuccessProps = {
  getDatasetData: GetDataset_Out;
};


export type TDatasetFailure = {
  error: ApiError | null
}
