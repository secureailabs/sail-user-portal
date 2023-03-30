import { AxiosError } from 'axios';

import { IConditionalRender } from 'src/components/ConditionalRenderRQuery/ConditionalRender/ConditionalRender.types';

export type TDocumentationProps = {
  status: IConditionalRender['status'];
  getAllDocumentationData: TGetAllDocumentationSuccess['documentation'];
  error: AxiosError<any>;
};

export type TDocumentationFailureProps = {
  error: AxiosError<any>;
};

export type TDocumentationSuccessProps = {
  getAllDocumentationData: TGetAllDocumentationSuccess['documentation'];
};

import { IconType } from 'react-icons';

export type TGetAllDocumentationSuccess = {
  documentation: Array<TGetDocumentationSuccess>;
};

export type TGetDocumentationSuccess = {
  id: string;
  icon: IconType;
  primaryText: string;
  secondaryText: string;
  documentationUrl: string;
};

export type TGetDocumentationStart = {
  id: string;
};
