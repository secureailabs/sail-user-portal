import React from 'react';
import { useForm } from 'react-hook-form';
import StandardContent from 'src/components/StandardContent';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';
import Card from 'src/components/Card';
import { TDatasetVersionSuccessProps } from './DatasetVersion.types';
import { DatasetVersionState } from 'src/client';
import DatasetUploadPortal from './DatasetUploadPortal';
import Heading from 'src/components/Heading';

const DatasetVersionSuccess: React.FC<TDatasetVersionSuccessProps> = ({
  getDatasetVersionData,
  refetch
}) => {
  const { register, handleSubmit, formState, trigger } = useForm({
    mode: 'onSubmit',
    values: {
      ...getDatasetVersionData
    }
  });

  return (
    <div>
      <StandardContent title={getDatasetVersionData?.name}>
        <>
          <Card primaryText="">
            <>
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
              {getDatasetVersionData?.note && (
                <>
                  <Heading size="h1">Upload Status</Heading>
                  <pre style={{ fontSize: '1.4rem', lineHeight: '2rem' }}>
                    {getDatasetVersionData?.note}
                  </pre>
                </>
              )}
            </>
          </Card>
          {getDatasetVersionData?.state ===
            DatasetVersionState.NOT_UPLOADED && (
            <DatasetUploadPortal refetch={refetch} />
          )}
        </>
      </StandardContent>
    </div>
  );
};

export default DatasetVersionSuccess;
