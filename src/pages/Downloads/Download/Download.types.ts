import { AxiosError } from 'axios';

import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { IconType } from 'react-icons';

export type TGetDownloadSuccess = {
  id: string;
  icon: IconType;
  primaryText: string;
  secondaryText: string;
  version: string;
  publish_date: string;
  buttonText: string;
  buttonUrl: string;
  documentationUrl: string;
  documentationName: string;
  fileSize: string;
  systemRequirements: string;
};

export type TDownloadProps = {
  status: IConditionalRender['status'];
  getDownloadData: TGetDownloadSuccess;
  error: AxiosError<any>;
};

export type TDownloadSuccessProps = {
  getDownloadData: TGetDownloadSuccess;
};

export type TDownloadFailure = {
  error: AxiosError<any> | null
}

export type TGetAllDownloadsSuccess = {
  downloads: Array<TGetDownloadSuccess>;
};

export type TGetDownloadStart = {
  id: string;
};
