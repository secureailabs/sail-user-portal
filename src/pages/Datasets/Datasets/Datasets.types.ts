import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError, GetMultipleDataset_Out } from 'src/client';

export type TDatasetsProps = {
  status: IConditionalRender['status'];
  getAllDatasetsData: GetMultipleDataset_Out;
  error: ApiError;
};

export type TDatasetsSuccessProps = {
  getAllDatasetsData: GetMultipleDataset_Out;
};


export type TDatasetsFailure = {
  error: ApiError;
}
