import { Container } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { colors } from 'react-select/dist/declarations/src/theme';
import { DefaultService, RegisterDatasetVersion_In } from 'src/client';
import Card from 'src/components/Card';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';

const RegisterDatasetVersionComponent: React.FC<any> = ({ close }) => {
  // get dataset_id from the url
  const { id } = useParams() as { id: string };

  const { register, handleSubmit, formState } = useForm({
    mode: 'onSubmit'
  });

  const [onscreen_message, setOnscreenMessage] = React.useState<string>('');

  const onSubmit: SubmitHandler<any> = (data) => {
    const add_version_req: RegisterDatasetVersion_In = {
      name: data.name,
      dataset_id: id,
      description: data.description
    };
    DefaultService.registerDatasetVersion(add_version_req)
      .then(() => {
        close();
      })
      .catch((error) => {
        setOnscreenMessage(error);
      });
  };

  return (
    <Container>
      <Card primaryText="Add new dataset version">
        <div>
          <MdClose onClick={close} className="modal__exit" />
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <FormFieldsRenderer
              register={register}
              formState={formState}
              full={true}
              fields={{
                name: {},
                description: { type: 'textarea' }
              }}
              button_text="Register"
            />
          </form>
          {onscreen_message && <div>{onscreen_message}</div>}
        </div>
      </Card>
    </Container>
  );
};

export default RegisterDatasetVersionComponent;
