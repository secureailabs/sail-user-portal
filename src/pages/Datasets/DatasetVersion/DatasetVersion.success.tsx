import React from 'react';
import { useForm } from 'react-hook-form';
import StandardContent from 'src/components/StandardContent';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';
import Card from 'src/components/Card';
import { TDatasetVersionSuccessProps } from './DatasetVersion.types';
import { DatasetVersionState } from 'src/client';
import DatasetUploadPortal from './DatasetUploadPortal';

const DatasetVersionSuccess: React.FC<TDatasetVersionSuccessProps> = ({
  getDatasetVersionData
}) => {
  const { register, handleSubmit, formState, trigger } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      ...getDatasetVersionData
    }
  });

  return (
    <div>
      <StandardContent title={getDatasetVersionData?.name}>
        <>
          <Card primaryText="">
            <div className="form-double">
              <FormFieldsRenderer
                register={register}
                formState={formState}
                fields={{
                  name: {},
                  dataset_version_created_time: {},
                  description: {},
                  state: {}
                }}
              />
            </div>
          </Card>
          {getDatasetVersionData?.state ===
            DatasetVersionState.NOT_UPLOADED && <DatasetUploadPortal />}
        </>
      </StandardContent>
    </div>
  );
};

export default DatasetVersionSuccess;
