import React, { useState } from 'react';
import Button from 'src/components/Button';
import Modal from '@mui/material/Modal';
import RegisterDatasetComponent from './RegisterDataset.component';
import { Container } from '@mui/material';
import { TRegisterDatasetContainerProps } from './RegisterDataset.types';

const RegisterDatasetContainer: React.FC<TRegisterDatasetContainerProps> = ({
  refetch
}) => {
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
        <p>New Dataset</p>
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
        <RegisterDatasetComponent close={handleHideRegisterModal} />
      </Modal>
    </Container>
  );
};

export default RegisterDatasetContainer;
