import React from 'react';
import { useForm } from 'react-hook-form';
import StandardContent from 'src/components/StandardContent';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';
import Card from 'src/components/Card';
import { TDatasetSuccessProps } from './Dataset.types';
import DatasetVersions from '../DatasetVersions/';

const DatasetSuccess: React.FC<TDatasetSuccessProps> = ({ getDatasetData }) => {
  const { register, handleSubmit, formState, trigger } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      ...getDatasetData,
      DataOwner: getDatasetData.organization.name,
      publish_date: getDatasetData?.creation_time,
      NumberOfVersions: 1,
      keywords: getDatasetData?.tags
    }
  });

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
      <DatasetVersions />
    </div>
  );
};

export default DatasetSuccess;
