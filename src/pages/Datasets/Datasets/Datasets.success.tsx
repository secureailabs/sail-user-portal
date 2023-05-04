import React from 'react';
import Table from 'src/components/Table';
import { TDatasetsSuccessProps } from './Datasets.types';
import StandardContent from 'src/components/StandardContent';
import RegisterDataset from './RegisterDataset';

const DatasetsSuccess: React.FC<TDatasetsSuccessProps> = ({
  getAllDatasetsData,
  refetch
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
        accessor: 'creation_time',
        width: 300
      },
      {
        Header: 'Keywords',
        accessor: 'tags',
        width: 200
      },
      {
        Header: 'Format',
        accessor: 'format',
        width: 200
      },
      {
        Header: 'State',
        accessor: 'state',
        width: 200
      }
    ],
    []
  );

  return (
    <StandardContent title="Datasets">
      <>
        <RegisterDataset refetch={refetch} />
        <Table
          base_url="/dashboard/datasets"
          id_accessor="id"
          columns={columns}
          // @ts-ignore
          data={getAllDatasetsData?.datasets}
        />
      </>
    </StandardContent>
  );
};

export default DatasetsSuccess;
