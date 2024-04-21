import React from 'react';
import styled from 'styled-components';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';

const EnableTutorDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const EnableTutor = () => {
  return (
    <EnableTutorDiv>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Aktivan predavač"
        />
        <FormHelperText>
          Dok je ovo dugme čekirano tvoji predmeti će biti vidljivi u privatnoj
          nastavi
        </FormHelperText>
      </FormGroup>
    </EnableTutorDiv>
  );
};

export default EnableTutor;
