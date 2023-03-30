import { AxiosError } from 'axios';

import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';
import { TGetAllDownloadsSuccess } from 'src/pages/Downloads/Download/Download.types';

export type TDownloadsProps = {
  status: IConditionalRender['status'];
  getAllDownloadsData: TGetAllDownloadsSuccess['downloads'];
  error: AxiosError<any>;
};

export type TDownloadsFailureProps = {
  error: AxiosError<any>;
};

export type TDownloadsSuccessProps = {
  getAllDownloadsData: TGetAllDownloadsSuccess['downloads'];
};
