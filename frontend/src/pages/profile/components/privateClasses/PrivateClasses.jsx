import styled from 'styled-components';
import TakenClasses from './components/TakenClasses/TakenClasses';
import GivenClasses from './components/GivenClasses/GivenClasses';

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
    </PrivateClassesDiv>
  );
};

export default PrivateClasses;
