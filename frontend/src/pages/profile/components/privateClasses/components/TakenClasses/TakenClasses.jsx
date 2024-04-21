import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useApiActions } from '../../../../../../api/useApiActions';
import Table from '../../../../../../components/Table';
import ErrorDialog from '../../../../../../components/dialogs/ErrorDialog';
import Loader from '../../../../../../components/Loader';
import { useTableColumns } from '../hooks/useTableColumns';
import NavLink from '../../../../../../components/NavLink';
import { tutoringRoute } from '../../../../../../router/routes';

const TakenClassesDiv = styled.div`
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

const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 18px;
  text-decoration: none;

  color: #535cb5;
  :hover {
    color: #333da8;
  }
`;

const TakenClasses = () => {
  const { getTutoringRequestsStudent } = useApiActions();
  const { loading, loaded, error, setError, action, response } =
    getTutoringRequestsStudent;
  const [takenClasses, setTakenClasses] = useState([]);
  const columns = useTableColumns();

  useEffect(() => {
    if (response) {
      setTakenClasses(response);
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
    if (loaded && takenClasses.length === 0) {
      return (
        <ClassesDiv>
          Još uvek nema zakazanih časova.
          <br />
          Ako želiš da zakažeš čas klikni
          <StyledNavlink to={tutoringRoute}>
            @Nastava
            <MenuBookIcon />
          </StyledNavlink>
        </ClassesDiv>
      );
    }

    return <Table columns={columns} payload={takenClasses} />;
  };

  return (
    <TakenClassesDiv>
      <ClassesH2> Časovi koje sam zakazao/la kod predavača </ClassesH2>
      {classes()}
    </TakenClassesDiv>
  );
};

export default TakenClasses;
