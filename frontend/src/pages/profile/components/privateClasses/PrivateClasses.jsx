import styled from 'styled-components';
import Tutors from './components/Tutors/Tutors';
import CreateTutor from './components/CreateTutor/CreateTutor';
import { useState } from 'react';
import TutorProfile from './components/Tutors/components/TutorProfile/TutorProfile';

const PrivateClassesDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
`;

const PrivateClasses = () => {
  const [reloadTutors, setReloadTutors] = useState(false);
  const [tutorId, setTutorId] = useState(null);

  const onSave = () => {
    setReloadTutors(true);
    setTutorId(null);
  };

  return (
    <PrivateClassesDiv>
      <Tutors
        reloadTutors={reloadTutors}
        setReloadTutors={setReloadTutors}
        setTutorId={setTutorId}
      />
      {!tutorId && <CreateTutor setReloadTutors={setReloadTutors} />}
      {tutorId && <TutorProfile tutorId={tutorId} onSave={onSave} />}
    </PrivateClassesDiv>
  );
};

export default PrivateClasses;
