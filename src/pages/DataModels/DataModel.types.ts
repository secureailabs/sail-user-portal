import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError } from 'src/client';

export type GetDataModel_Out = {
  id: string;
  name: string;
  description: string;
  created: string;
};

export type TDataModelProps = {
  status: IConditionalRender['status'];
  getDataModelData: GetDataModel_Out;
  error: ApiError;
};

export type TDataModelSuccessProps = {
  getDataModelData: GetDataModel_Out;
};

export type TDataModelFailure = {
  error: ApiError | null;
};
