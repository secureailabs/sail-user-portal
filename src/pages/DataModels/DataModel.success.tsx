import React from 'react';
import StandardContent from 'src/components/StandardContent';
import { TDataModelSuccessProps } from './DataModel.types';
import DataFrame from './DataFrame';
import Button from 'src/components/Button';
import { useForm } from 'react-hook-form';
import { FormFields } from 'src/components/FormFieldsRenderer/FormFieldsRenderer.types';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';

const DataModelSuccess: React.FC<TDataModelSuccessProps> = ({
  getDataModelData
}) => {
  const { register, handleSubmit, formState, watch } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: getDataModelData.name,
      description: getDataModelData.description,
      state: getDataModelData.state
    }
  });

  const fields: FormFields = {
    name: {
      type: 'text'
    },
    description: {
      type: 'text'
    },
    state: {
      type: 'select',
      label: 'State',
      options: ['DRAFT', 'PUBLISHED', 'DELETED'],
      defaultValue: getDataModelData.state
    }
  };

  return (
    <div>
      <StandardContent title={getDataModelData.name}>
        <>
          <div className="form-double">
            <FormFieldsRenderer
              register={register}
              formState={formState}
              fields={fields}
              button_text="Update"
            />
          </div>
          {getDataModelData.data_model_dataframes.map((dataframe_id) => (
            <DataFrame key={dataframe_id} dataframe_id={dataframe_id} />
          ))}
          <Button button_type="primary" full={true}>
            Create
          </Button>
        </>
      </StandardContent>
    </div>
  );
};

export default DataModelSuccess;
