import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useApiActions } from '../../../../../../api/useApiActions';
import Table from '../components/Table';

const StudentClassesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassesH2 = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const StudentClasses = () => {
  const { getTutoringRequestsStudent } = useApiActions();
  const { loading, error, setError, action, loaded, response } =
    getTutoringRequestsStudent;

  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);

  useEffect(() => {
    action();
  }, []);

  return (
    <StudentClassesDiv>
      <ClassesH2> Časovi koje sam ja zakazao kod predavača</ClassesH2>
      <Table />
    </StudentClassesDiv>
  );
};

export default StudentClasses;
