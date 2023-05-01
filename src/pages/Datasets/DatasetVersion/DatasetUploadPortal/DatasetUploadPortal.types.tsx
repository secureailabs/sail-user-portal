import { SeriesDataModelSchema } from 'src/client';

export type TDataframeValidationState = {
  [key: string]: boolean;
};

export type TDataFrameDataModel = {
  type: string;
  data_frame_name: string;
  data_frame_data_model_id: string;
  list_series_data_model: SeriesDataModelSchema[];
};

export type TDataModel = {
  data_model_id: string;
  data_model_name: string;
  data_model_dataframes: TDataFrameDataModel[];
};
