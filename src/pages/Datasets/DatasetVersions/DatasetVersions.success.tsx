import React from 'react';
import Table from 'src/components/Table';
import { TDatasetVersionsSuccessProps } from './DatasetVersions.types';
import StandardContent from 'src/components/StandardContent';
import { useParams } from 'react-router-dom';

const DatasetVersionsSuccess: React.FC<TDatasetVersionsSuccessProps> = ({
  getAllDatasetVersionsData
}) => {
  const { id } = useParams() as { id: string };
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        width: 300
      },
      {
        Header: 'Publish Date',
        accessor: 'dataset_version_created_time',
        width: 300
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
    <StandardContent title="Versions">
      <Table
        base_url={'/dashboard/datasets/' + id + '/versions'}
        id_accessor="id"
        columns={columns}
        data={getAllDatasetVersionsData?.dataset_versions || []}
      />
    </StandardContent>
  );
};

export default DatasetVersionsSuccess;
