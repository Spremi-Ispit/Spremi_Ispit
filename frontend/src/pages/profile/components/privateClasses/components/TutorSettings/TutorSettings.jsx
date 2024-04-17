import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/buttons/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TutorDialog from './components/TutorDialog/TutorDialog';

const TutorSettingsDiv = styled.div``;

const WannaBeTutorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TutorSettings = () => {
  const [open, setOpen] = useState(false);

  const closeTutorSettings = () => {
    setOpen(false);
  };

  const openTutorSettings = () => {
    setOpen(true);
  };

  return (
    <TutorSettingsDiv>
      <WannaBeTutorDiv>
        <h2>Želiš da držiš časove?</h2>
        <ArrowRightAltIcon />
        <Button onClick={openTutorSettings}>Postani predavač</Button>
        <TutorDialog open={open} closeTutorSettings={closeTutorSettings} />
      </WannaBeTutorDiv>
    </TutorSettingsDiv>
  );
};

export default TutorSettings;
