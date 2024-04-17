import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useApiActions } from '../../../../../../api/useApiActions';
import Table from '../components/Table';
import ErrorDialog from '../../../../../../components/dialogs/ErrorDialog';
import Loader from '../../../../../../components/Loader';
import { useTableColumns } from '../components/TableColumns';
import NavLink from '../../../../../../components/NavLink';
import { profileInfoRoute } from '../../../../../../router/routes';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../../utils/managers/UrlManager';

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

const GivenClasses = () => {
  const { getTutoringRequests } = useApiActions();
  const { loading, loaded, error, setError, action, response } =
    getTutoringRequests;
  const [givenClasses, setGivenClasses] = useState([]);
  const columns = useTableColumns();
  const urlManager = useUrlManager();
  const { urlUsername } = urlManager.getParams();

  useEffect(() => {
    if (response) {
      setGivenClasses(response);
      // setGivenClasses([]);
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
      return (
        <ClassesDiv>
          Još uvek nema zakazanih časova.
          <br />
          Za podešavanje profila predavača idi na
          <StyledNavlink
            to={`${profileInfoRoute}?${allowedUrlParams.username}=${urlUsername}`}
          >
            Informacije
          </StyledNavlink>
        </ClassesDiv>
      );
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
