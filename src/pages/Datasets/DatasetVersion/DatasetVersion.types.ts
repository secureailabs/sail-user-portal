import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError, GetDatasetVersion_Out } from 'src/client';

export type TDatasetVersionProps = {
  status: IConditionalRender['status'];
  getDatasetVersionData: GetDatasetVersion_Out;
  error: ApiError;
};

export type TDatasetVersionSuccessProps = {
  getDatasetVersionData: GetDatasetVersion_Out;
};

export type TDatasetVersionFailure = {
  error: ApiError | null;
};
