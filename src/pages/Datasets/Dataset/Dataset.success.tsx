import React from 'react';
import { useForm } from 'react-hook-form';
import StandardContent from 'src/components/StandardContent';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';
import Card from 'src/components/Card';
import { TDatasetSuccessProps } from './Dataset.types';
import Table from 'src/components/Table';

const DatasetSuccess: React.FC<TDatasetSuccessProps> = ({ getDatasetData }) => {
  const { register, handleSubmit, formState, trigger } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      ...getDatasetData,
      DataOwner: getDatasetData.organization.name,
      publish_date: getDatasetData?.creation_time,
      NumberOfVersions: 1
    }
  });

  const columns = React.useMemo(
    () => [
      {
        Header: 'Version',
        accessor: 'version',
        width: 300
      },

      {
        Header: 'Publish Date',
        accessor: 'publish_date',
        width: 300
      },

      {
        Header: 'No. of Patients',
        accessor: 'NumberOfPatients',

        width: 200
      },
      {
        Header: 'Comments',
        accessor: 'Comments',
        width: 200
      }
    ],
    []
  );

  return (
    <div>
      <StandardContent title={getDatasetData?.name}>
        <Card primaryText="">
          <div className="form-double">
            <FormFieldsRenderer
              register={register}
              formState={formState}
              fields={{
                NumberOfVersions: {
                  label: 'No. of Versions',
                  placeholder: 'No. of Versions',
                  type: 'text'
                },
                publish_date: {},
                DataOwner: {},
                keywords: {},
                description: {}
              }}
            />
          </div>
        </Card>
      </StandardContent>
      <StandardContent title={getDatasetData?.name}>
        <Table
          // base_url={`/dashboard/datasets/${getDatasetData?.id}`}
          // id_accessor="key"
          columns={columns}
          data={[
            {
              version: '1.0',
              publish_date: getDatasetData.creation_time,
              NumberOfPatients: 400,
              Comments:
                'Initial datastet with patient data from January 1995 to January 2022.'
            }
          ]}
        />
      </StandardContent>
    </div>
  );
};

export default DatasetSuccess;
