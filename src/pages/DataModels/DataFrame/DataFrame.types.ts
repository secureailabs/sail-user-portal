import { ApiError, GetDataModelDataframe_Out } from 'src/client';
import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';

export type TDataFrameSuccessProps = {
  getDataFrameData: GetDataModelDataframe_Out;
};

export type TDataFrameProps = {
  dataframe_id: string;
};

export type TDataFrameRenderProps = {
  status: IConditionalRender['status'];
  getDataFrameData: GetDataModelDataframe_Out | undefined;
  error: ApiError | null;
};

export type TDataFrameFailure = {
  error: ApiError | null;
};
