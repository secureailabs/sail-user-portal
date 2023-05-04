import React, { useState } from 'react';
import Button from 'src/components/Button';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';
import { TProvisionScnProps } from './ProvisionScn.types';
import ProvisionScnForm from './ProvisionScn.form';

const ProvisionScnComponent: React.FC<TProvisionScnProps> = ({ refetch }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };
  const handleHideRegisterModal = () => {
    setShowRegisterModal(false);
    refetch();
  };

  return (
    <Container
      sx={{
        marginRight: '0px',
        marginTop: '-5rem',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button
        onClick={handleShowRegisterModal}
        button_type="primary"
        height="5rem"
        full={false}
      >
        <p>Create New</p>
      </Button>
      <Modal
        open={showRegisterModal}
        onClose={handleHideRegisterModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        // center the modal
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ProvisionScnForm close={handleHideRegisterModal} />
      </Modal>
    </Container>
  );
};

export default ProvisionScnComponent;
