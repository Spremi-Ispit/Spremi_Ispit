import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useApiActions } from '../../../../../../api/useApiActions';
import Table from '../components/Table';
import ErrorDialog from '../../../../../../components/dialogs/ErrorDialog';
import Loader from '../../../../../../components/Loader';
import { useTableColumns } from '../components/TableColumns';

const GivenClassesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassesH2 = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const ClassesDiv = styled.div`
  text-align: center;
`;

const GivenClasses = () => {
  const { getTutoringRequests } = useApiActions();
  const { loading, loaded, error, setError, action, response } =
    getTutoringRequests;
  const [givenClasses, setGivenClasses] = useState([]);
  const columns = useTableColumns();

  useEffect(() => {
    if (response) {
      setGivenClasses(response);
    }
  }, [response]);

  useEffect(() => {
    action();
  }, []);

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (loading) {
    return <Loader />;
  }

  const classes = () => {
    if (loaded && givenClasses.length === 0) {
      return <ClassesDiv>Još uvek nema zakazanih časova.</ClassesDiv>;
    }

    return <Table columns={columns} payload={givenClasses} />;
  };

  return (
    <GivenClassesDiv>
      <ClassesH2> Časovi zakazani kod mene </ClassesH2>
      {classes()}
    </GivenClassesDiv>
  );
};

export default GivenClasses;
