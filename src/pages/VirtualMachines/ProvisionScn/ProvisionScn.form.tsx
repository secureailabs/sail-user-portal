import { Container } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import { useQueryClient } from 'react-query';
import {
  RegisterSecureComputationNode_In,
  DefaultService,
  UserInfo_Out,
  SecureComputationNodeSize
} from 'src/client';
import Card from 'src/components/Card';
import FormFieldsRenderer from 'src/components/FormFieldsRenderer';

const ProvisionScnModal: React.FC<any> = ({ close }) => {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onSubmit'
  });

  const [onscreen_message, setOnscreenMessage] = React.useState<string>('');
  const queryClient = useQueryClient();
  const userData: UserInfo_Out | undefined =
    queryClient.getQueryData('userData');

  // get a list of scn sizes from the values of the enum SecureComputationNodeSize
  const scn_sizes = Object.values(SecureComputationNodeSize);

  const onSubmit: SubmitHandler<any> = (data) => {
    if (!userData) {
      setOnscreenMessage('User data not found. Please login again.');
      return;
    }

    // get the data federation where the current user is a researcher
    DefaultService.getAllDataFederations(undefined, userData.organization.id)
      .then((response) => {
        if (response.data_federations?.length === 0) {
          setOnscreenMessage("No data federation found. Can't provision.");
          return;
        }
        const federation_id = response.data_federations?.[0].id;
        if (!federation_id) {
          setOnscreenMessage("No data federation found. Can't provision.");
          return;
        }
        setOnscreenMessage('Requesting SCN. Kindly wait...');
        const provision_scn_req: RegisterSecureComputationNode_In = {
          data_federation_id: federation_id,
          size: data.size as SecureComputationNodeSize
        };
        DefaultService.registerSecureComputationNode(provision_scn_req)
          .then(() => {
            close();
          })
          .catch((error) => {
            setOnscreenMessage(error.message);
          });
      })
      .catch((error) => {
        setOnscreenMessage(error.message);
      });
  };

  return (
    <Container>
      <Card primaryText="Provision new SCN">
        <div className="">
          <MdClose onClick={close} className="modal__exit" />
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <FormFieldsRenderer
              register={register}
              formState={formState}
              full={true}
              fields={{
                size: {
                  type: 'select',
                  options: scn_sizes,
                  defaultValue: scn_sizes[0]
                }
              }}
              button_text="Provision"
              buttonNeverDisabled={true}
            />
          </form>
          <div>{onscreen_message}</div>
        </div>
      </Card>
    </Container>
  );
};

export default ProvisionScnModal;
