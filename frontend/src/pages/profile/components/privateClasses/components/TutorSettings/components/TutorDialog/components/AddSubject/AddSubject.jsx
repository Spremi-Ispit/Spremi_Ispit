import React, { useState } from 'react';
import styled from 'styled-components';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import Button from '../../../../../../../../../../components/buttons/Button';
import { useUrlManager } from '../../../../../../../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../../../../../../../api/useApiActions';
import Loader from '../../../../../../../../../../components/Loader';
import ErrorDialog from '../../../../../../../../../../components/dialogs/ErrorDialog';

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

const AddSubject = ({ setReloadSubjects }) => {
  const urlManager = useUrlManager();
  const { urlYearOfStudy, urlDepartment, urlSubject } = urlManager.getParams();
  const { addSubjectToTutor } = useApiActions();
  const { action, loading, error, setError } = addSubjectToTutor;
  const [subject, setSubject] = useState(null);

  const addSubject = async () => {
    if (urlYearOfStudy && urlDepartment && urlSubject) {
      const { id } = subject;
      await action(id);
      setReloadSubjects(true);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
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
