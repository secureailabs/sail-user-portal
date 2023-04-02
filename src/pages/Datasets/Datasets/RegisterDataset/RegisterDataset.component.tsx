import { Container } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import { DatasetFormat, DefaultService, RegisterDataset_In } from 'src/client';
import Card from 'src/components/Card';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';

const RegisterDatasetComponent: React.FC<any> = ({ close }) => {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    DefaultService.getAllDataFederations().then((response) => {
      if (response.data_federations?.length === 0) {
        // Respond with error
        return;
      }
      const federation_id = response.data_federations?.[0].id;
      if (!federation_id) {
        // Respond with error
        return;
      }
      const data_format = response.data_federations?.[0].data_format;
      const register_dataset_data: RegisterDataset_In = {
        name: data.name,
        format: data_format as unknown as DatasetFormat,
        tags: data.tags,
        description: data.description
      };
      DefaultService.registerDataset(register_dataset_data).then((response) => {
        const dataset_id = response.id;
        // Add dataset to federation
        DefaultService.addDataset(federation_id, dataset_id).then(
          (response) => {
            // Respond with success
            console.log(response);
          }
        );
      });
    });
  };

  return (
    <Container>
      <Card primaryText="Register new dataset">
        <div className="">
          <MdClose onClick={close} className="modal__exit" />
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <FormFieldsRenderer
              register={register}
              formState={formState}
              full={true}
              fields={{
                name: {},
                tags: {},
                description: { type: 'textarea' }
              }}
              button_text="Register"
            />
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default RegisterDatasetComponent;
