import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError, GetDatasetVersion_Out } from 'src/client';

export type TDatasetVersionProps = {
  status: IConditionalRender['status'];
  getDatasetVersionData: GetDatasetVersion_Out;
  refetch: () => void;
  error: ApiError;
};

export type TDatasetVersionSuccessProps = {
  getDatasetVersionData: GetDatasetVersion_Out;
  refetch: () => void;
};

export type TDatasetVersionFailure = {
  error: ApiError | null;
};
