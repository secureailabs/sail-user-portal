import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError, GetMultipleDatasetVersion_Out } from 'src/client';

export type TDatasetVersionsProps = {
  status: IConditionalRender['status'];
  getAllDatasetVersionsData: GetMultipleDatasetVersion_Out | null;
  refetch: () => void;
  error: ApiError | null;
};

export type TDatasetVersionsSuccessProps = {
  getAllDatasetVersionsData: GetMultipleDatasetVersion_Out | null;
  refetch: () => void;
};

export type TDatasetVersionsFailure = {
  error: ApiError;
};
