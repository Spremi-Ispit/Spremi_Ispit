import styled from 'styled-components';
import Tutors from './components/Tutors/Tutors';
import TutorSettings from './components/TutorSettings/TutorSettings';

const PrivateClassesDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
`;

const PrivateClasses = () => {
  return (
    <PrivateClassesDiv>
      <Tutors />
      <TutorSettings />
    </PrivateClassesDiv>
  );
};

export default PrivateClasses;
