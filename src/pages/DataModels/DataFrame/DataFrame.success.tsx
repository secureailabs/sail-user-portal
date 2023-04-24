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

  const [seriesList, setSeriesList] = React.useState<string[]>(
    getDataFrameData.data_model_series
  );

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

  const addNewSeries = () => {
    setSeriesList([...seriesList, 'new']);
  };

  return (
    <Accordion
      title={dataframeName}
      description={dataframeDescription}
      backgroundColour={
        getDataFrameData.id === 'new'
          ? 'lightgreen'
          : formState.isDirty
          ? 'orange'
          : '#BBBBBB'
      }
    >
      <>
        <div className="form-double">
          <FormFieldsRenderer
            register={register}
            formState={formState}
            fields={fields}
            button_text={getDataFrameData.id === 'new' ? 'Create' : 'Update'}
          />
        </div>
        {seriesList.map((series_id) => (
          <Series key={series_id} series_id={series_id} />
        ))}
        <Button
          button_type="primary"
          full={true}
          disabled={getDataFrameData.id === 'new'}
          onClick={addNewSeries}
        >
          Add New Series
        </Button>
      </>
    </Accordion>
  );
};

export default DataFrameSuccess;
