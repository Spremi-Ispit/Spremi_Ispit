import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import Button from '../../../../../../../../../../../../components/buttons/Button';
import { useUrlManager } from '../../../../../../../../../../../../utils/managers/UrlManager';
import Loader from '../../../../../../../../../../../../components/Loader';
import Error from '../../../../../../../../../../../../components/dialogs/Error';
import { useFetch } from '../../../../../../../../../../../../api/useFetch';
import { addSubjectToTutor } from '../../../../../../../../../../../../api/tutor/addSubjectToTutor';

const AddSubject = ({ setReloadSubjects, tutorId }) => {
  const urlManager = useUrlManager();
  const { urlYearOfStudy, urlDepartment, urlSubject } = urlManager.getParams();
  const [subject, setSubject] = useState(null);
  const { fetch, loading, loaded, error } = useFetch(addSubjectToTutor);

  const addSubject = () => {
    if (urlYearOfStudy && urlDepartment && urlSubject) {
      const { id } = subject;
      fetch(id, tutorId);
    }
  };

  useEffect(() => {
    if (loaded) {
      setReloadSubjects(true);
    }
  }, [loaded]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <AddSubjectDiv>
      <YearOfStudy />
      <Department />
      <Subject onSubjectChange={setSubject} />
      <StyledButton
        onClick={addSubject}
        $disabled={!(urlYearOfStudy && urlDepartment && urlSubject)}
      >
        Dodaj predmet
      </StyledButton>
    </AddSubjectDiv>
  );
};

export default AddSubject;

const AddSubjectDiv = styled.div`
  display: flex;
  white-space: nowrap;
  box-shadow: rgb(185, 185, 185) -1px 2px 9px 1px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  padding: 10px;
  gap: 10px;
  overflow: overlay;
`;

const StyledButton = styled(Button)`
  max-height: 30px;
  align-self: end;
`;
