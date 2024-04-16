import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useApiActions } from '../../../../../../api/useApiActions';
import Table from '../components/Table';

const ClassesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassesH2 = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const TutorClasses = () => {
  const { getTutoringRequests } = useApiActions();
  const { loading, error, setError, action, loaded, response } =
    getTutoringRequests;

  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);

  useEffect(() => {
    action();
  }, []);

  return (
    <ClassesDiv>
      <ClassesH2> Časovi koje su studenti zakazali kod mene</ClassesH2>
      <Table />
    </ClassesDiv>
  );
};

export default TutorClasses;
