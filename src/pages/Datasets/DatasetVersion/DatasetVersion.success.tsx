import React from 'react';
import { useForm } from 'react-hook-form';
import StandardContent from 'src/components/StandardContent';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';
import Card from 'src/components/Card';
import { TDatasetVersionSuccessProps } from './DatasetVersion.types';

const DatasetVersionSuccess: React.FC<TDatasetVersionSuccessProps> = ({
  getDatasetVersionData
}) => {
  const { register, handleSubmit, formState, trigger } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      ...getDatasetVersionData,
      DataOwner: getDatasetVersionData.organization.name,
      publish_date: getDatasetVersionData?.dataset_version_created_time,
      NumberOfVersions: 1
    }
  });

  return (
    <div>
      <StandardContent title={getDatasetVersionData?.name}>
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
    </div>
  );
};

export default DatasetVersionSuccess;
