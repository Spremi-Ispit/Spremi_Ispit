import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/buttons/Button';
import { useFetch } from '../../../../../../api/useFetch';
import { createTutorProfile } from '../../../../../../api/tutor/createTutorProfile';
import Error from '../../../../../../components/dialogs/Error';
import Loader from '../../../../../../components/Loader';

const CreateTutor = ({ setReloadTutors }) => {
  const { data, error, fetch, loading } = useFetch(createTutorProfile);

  const createTutor = () => {
    if (window.confirm('Da li ste sigurni?')) {
      fetch();
    }
  };

  useEffect(() => {
    if (data) {
      setReloadTutors(true);
    }
  }, [data]);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <CreateTutorDiv>
      <Button onClick={createTutor}>Dodaj novog predavača</Button>
    </CreateTutorDiv>
  );
};

const CreateTutorDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default CreateTutor;
