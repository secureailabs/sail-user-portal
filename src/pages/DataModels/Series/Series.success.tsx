import React from 'react';
import { TSeriesSuccessProps } from './Series.types';
import Accordion from 'src/components/Accordion';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';
import { useForm } from 'react-hook-form';
import { FormFields } from 'src/components/FormFieldsRenderer/FormFieldsRenderer.types';

const SeriesSuccess: React.FC<TSeriesSuccessProps> = ({ getSeriesData }) => {
  const [seriesType, setSeriesType] = React.useState<string>(
    getSeriesData.series_schema.type
  );
  const [seriesName, setSeriesName] = React.useState<string>(
    getSeriesData.name
  );

  const { register, handleSubmit, formState, watch } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: seriesName,
      description: getSeriesData.description,
      type: seriesType,
      values: getSeriesData.series_schema.list_value,
      min: getSeriesData.series_schema.min,
      max: getSeriesData.series_schema.max,
      unit: getSeriesData.series_schema.unit,
      resolution: getSeriesData.series_schema.resolution
    }
  });

  let fields: FormFields = {
    name: {
      type: 'text'
    },
    description: {
      type: 'text'
    },
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
      defaultValue: seriesType
    }
  };

  const [type, name] = watch(['type', 'name']);
  React.useEffect(() => {
    setSeriesType(type);
  }, [type]);

  React.useEffect(() => {
    setSeriesName(name);
  }, [name]);

  if (seriesType === 'SeriesDataModelCategorical') {
    fields = {
      ...fields,
      values: {
        type: 'text'
      }
    };
  } else if (seriesType === 'SeriesDataModelInterval') {
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
    <Accordion title={seriesName} description="" backgroundColour="orange">
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
