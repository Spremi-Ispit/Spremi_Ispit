import styled from 'styled-components';
import StudentClasses from './components/StudentClasses/StudentClasses';
import TutorClasses from './components/TutorClasses/TutorClasses';

const PrivateClassesDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
`;

const PrivateClasses = () => {
  return (
    <PrivateClassesDiv>
      <StudentClasses />
      <TutorClasses />
    </PrivateClassesDiv>
  );
};

export default PrivateClasses;
