import { SeriesDataModelSchema } from 'src/client';

export type TFileInformation = {
  file: File | null;
  required: boolean;
  dataframeName: string;
  dataframeId: string;
  validationState: boolean;
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
