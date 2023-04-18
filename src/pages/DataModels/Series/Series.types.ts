import { ApiError, GetDataModelSeries_Out } from 'src/client';
import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';

export type TSeriesSuccessProps = {
  getSeriesData: GetDataModelSeries_Out;
};

export type TSeriesProps = {
  series_id: string;
};

export type TSeriesRenderProps = {
  status: IConditionalRender['status'];
  getSeriesData: GetDataModelSeries_Out | undefined;
  error: ApiError | null;
};

export type TSeriesFailure = {
  error: ApiError | null;
};
