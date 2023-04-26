import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError, GetMultipleDataset_Out } from 'src/client';

export type TDatasetsProps = {
  status: IConditionalRender['status'];
  getAllDatasetsData: GetMultipleDataset_Out;
  refetch: () => void;
  error: ApiError | null;
};

export type TDatasetsSuccessProps = {
  getAllDatasetsData: GetMultipleDataset_Out;
  refetch: () => void;
};

export type TDatasetsFailure = {
  error: ApiError;
};
