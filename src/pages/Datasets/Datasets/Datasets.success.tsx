/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import Table from 'src/components/Table';

import { TDatasetsSuccessProps } from './Datasets.types';

import StandardContent from 'src/components/StandardContent';

const DatasetsSuccess: React.FC<TDatasetsSuccessProps> = ({
  getAllDatasetsData
}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        width: 300
      },
      {
        Header: 'Publish Date',
        accessor: 'publish_date',
        width: 300
      },

      {
        Header: 'Keywords',
        accessor: 'keywords',

        width: 200
      },
      {
        Header: 'Dataset Owner',
        accessor: 'organization.name',
        width: 200
      }
    ],
    []
  );

  const parsedData = Object.entries(getAllDatasetsData)
    .map(([key, value]) => {
      return {
        key,
        ...value,
        // @ts-ignore
        publish_date: new Date(value.publish_date * 1000).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
        )
      };
    })
    .sort((elem1, elem2) =>
      elem2.publish_date.localeCompare(elem1.publish_date)
    );
  return (
    <StandardContent title="Datasets">
      <Table
        base_url="/dashboard/datasets"
        id_accessor="id"
        columns={columns}
        data={parsedData}
      />
    </StandardContent>
  );
};

export default DatasetsSuccess;
