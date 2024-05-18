import React, { useState } from 'react';
import styled from 'styled-components';
import AddSubject from './components/AddSubject/AddSubject';
import TutorSubjects from './components/TutorSubjects/TutorSubjects';

const Subjects = ({ tutorId }) => {
  const [reloadSubjects, setReloadSubjects] = useState(false);

  return (
    <SubjectsDiv>
      <TutorSubjects
        tutorId={tutorId}
        reloadSubjects={reloadSubjects}
        setReloadSubjects={setReloadSubjects}
      />
      <AddSubject tutorId={tutorId} setReloadSubjects={setReloadSubjects} />
    </SubjectsDiv>
  );
};

export default Subjects;

const SubjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px 5px 0px 0px;
`;
