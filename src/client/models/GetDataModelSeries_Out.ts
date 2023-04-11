/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataModelSeriesState } from './DataModelSeriesState';

export type GetDataModelSeries_Out = {
    name: string;
    description: string;
    series_schema: any;
    id: string;
    creation_time?: string;
    organization_id: string;
    state: DataModelSeriesState;
};

