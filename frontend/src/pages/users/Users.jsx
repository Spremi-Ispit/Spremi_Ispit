import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer';
import UsersTable from './components/UsersTable';
import PromoteUserForm from './components/PromoteUserForm';
import { userRole } from '../../redux/app/state';
import { useSelector } from 'react-redux';
import { selectRole } from '../../redux/app/selectors';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Bounty from './components/Bounty';

const MainDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsersDiv = styled.div`
  display: flex;
  flex: 1;
`;

export const Users = () => {
  const role = useSelector(selectRole);

  const promoteUserForm = () => {
    if (role === userRole.admin) {
      return <PromoteUserForm />;
    }

    return null;
  };

  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <UsersDiv>
        <MainDiv>
          <Bounty />
          <ContentDiv>
            <h1>Najaktivniji članovi</h1>
            <UsersTable />
            {promoteUserForm()}
          </ContentDiv>
        </MainDiv>
      </UsersDiv>
      <Footer />
    </>
  );
};

export default Users;
