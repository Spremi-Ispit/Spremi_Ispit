import * as React from 'react';
import styled from 'styled-components';
import Instagram from '../components/Instagram';

const TutoringH2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const TutorDiv = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tutor = () => {
  return (
    <TutorDiv>
      <TutoringH2>Želiš da držiš časove?</TutoringH2>
      <p>Rado ćemo te povezati sa studentima kojima su potrebni časovi!</p>
      <Instagram />
    </TutorDiv>
  );
};

export default Tutor;
