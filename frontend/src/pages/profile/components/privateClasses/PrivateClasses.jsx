import styled from 'styled-components';
import TakenClasses from './components/TakenClasses/TakenClasses';
import GivenClasses from './components/GivenClasses/GivenClasses';
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
      <TakenClasses />
      <GivenClasses />
      <TutorSettings />
    </PrivateClassesDiv>
  );
};

export default PrivateClasses;
