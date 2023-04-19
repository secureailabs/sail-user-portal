import React from 'react';
import Series from 'src/pages/DataModels/Series';
import { TDataFrameSuccessProps } from './DataFrame.types';
import Accordion from 'src/components/Accordion';
import { useForm } from 'react-hook-form';
import { FormFields } from 'src/components/FormFieldsRenderer/FormFieldsRenderer.types';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';
import Button from 'src/components/Button';

const DataFrameSuccess: React.FC<TDataFrameSuccessProps> = ({
  getDataFrameData
}) => {
  const [dataframeName, setDataframeName] = React.useState<string>(
    getDataFrameData.name
  );
  const [dataframeDescription, setDataframeDescription] =
    React.useState<string>(getDataFrameData.description);

  const { register, handleSubmit, formState, watch } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: getDataFrameData.name,
      description: getDataFrameData.description
    }
  });

  const [name, description] = watch(['name', 'description']);
  React.useEffect(() => {
    setDataframeName(name);
  }, [name]);

  React.useEffect(() => {
    setDataframeDescription(description);
  }, [description]);

  const fields: FormFields = {
    name: {
      type: 'text'
    },
    description: {
      type: 'text'
    }
  };

  return (
    <Accordion title={dataframeName} description={dataframeDescription}>
      <>
        <div className="form-double">
          <FormFieldsRenderer
            register={register}
            formState={formState}
            fields={fields}
            button_text="Update"
          />
        </div>
        {getDataFrameData.data_model_series.map((series_id) => (
          <Series key={series_id} series_id={series_id} />
        ))}
        <Button button_type="primary" full={true}>
          Create
        </Button>
      </>
    </Accordion>
  );
};

export default DataFrameSuccess;
