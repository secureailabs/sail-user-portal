import React from 'react';
import { TSeriesSuccessProps } from './Series.types';
import Accordion from 'src/components/Accordion';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';
import { useForm } from 'react-hook-form';
import { FormFields } from 'src/components/FormFieldsRenderer/FormFieldsRenderer.types';

const SeriesSuccess: React.FC<TSeriesSuccessProps> = ({ getSeriesData }) => {
  const [series_type, setSeriesType] = React.useState<string>(
    getSeriesData.series_schema.type
  );

  const { register, handleSubmit, formState, watch } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      type: series_type,
      values: getSeriesData.series_schema.list_value,
      min: getSeriesData.series_schema.min,
      max: getSeriesData.series_schema.max,
      unit: getSeriesData.series_schema.unit,
      resolution: getSeriesData.series_schema.resolution
    }
  });

  let fields: FormFields = {
    type: {
      type: 'select',
      label: 'Type',
      options: [
        'SeriesDataModelCategorical',
        'SeriesDataModelDate',
        'SeriesDataModelDateTime',
        'SeriesDataModelInterval',
        'SeriesDataModelUnique'
      ],
      defaultValue: series_type
    }
  };

  // re-render when type changes
  const watchType = watch('type');
  React.useEffect(() => {
    setSeriesType(watchType);
  }, [watchType]);

  if (series_type === 'SeriesDataModelCategorical') {
    fields = {
      ...fields,
      values: {
        type: 'text'
      }
    };
  } else if (series_type === 'SeriesDataModelInterval') {
    fields = {
      ...fields,
      min: {
        type: 'number'
      },
      max: {
        type: 'number'
      },
      unit: {
        type: 'text'
      },
      resolution: {
        type: 'number'
      }
    };
  }

  return (
    <Accordion title={getSeriesData.name} description="">
      <div className="form-double">
        <FormFieldsRenderer
          register={register}
          formState={formState}
          fields={fields}
          button_text="Update"
        />
      </div>
    </Accordion>
  );
};

export default SeriesSuccess;
