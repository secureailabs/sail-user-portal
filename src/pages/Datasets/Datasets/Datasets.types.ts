import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError, GetMultipleDataset_Out } from 'src/client';

export type TDatasetsProps = {
  status: IConditionalRender['status'];
  getAllDatasetsData: GetMultipleDataset_Out | null;
  error: ApiError | null;
};

export type TDatasetsSuccessProps = {
  getAllDatasetsData: GetMultipleDataset_Out | null;
};

export type TDatasetsFailure = {
  error: ApiError;
};
