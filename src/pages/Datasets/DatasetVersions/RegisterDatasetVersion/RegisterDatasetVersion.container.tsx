import React, { useState } from 'react';
import Button from 'src/components/Button';
import Modal from '@mui/material/Modal';
import RegisterDatasetVersionComponent from './RegisterDatasetVersion.component';
import { Container } from '@mui/material';

const RegisterDatasetVersionContainer: React.FC = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };
  const handleHideRegisterModal = () => {
    setShowRegisterModal(false);
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
        <p>Add Version</p>
      </Button>
      <Modal
        open={showRegisterModal}
        onClose={handleHideRegisterModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <RegisterDatasetVersionComponent close={handleHideRegisterModal} />
      </Modal>
    </Container>
  );
};

export default RegisterDatasetVersionContainer;
