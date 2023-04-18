import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { ApiError } from 'src/client';
import { GetDataModel_Out } from 'src/client';

export type TDataModelProps = {
  status: IConditionalRender['status'];
  getDataModelData: GetDataModel_Out | undefined;
  error: ApiError | null;
};

export type TDataModelSuccessProps = {
  getDataModelData: GetDataModel_Out;
};

export type TDataModelFailure = {
  error: ApiError | null;
};
