import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError, GetMultipleDatasetVersion_Out } from 'src/client';

export type TDatasetVersionsProps = {
  status: IConditionalRender['status'];
  getAllDatasetVersionsData: GetMultipleDatasetVersion_Out | null;
  error: ApiError | null;
};

export type TDatasetVersionsSuccessProps = {
  getAllDatasetVersionsData: GetMultipleDatasetVersion_Out | null;
};

export type TDatasetVersionsFailure = {
  error: ApiError;
};
