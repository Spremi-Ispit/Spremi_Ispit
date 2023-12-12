import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer';
import UsersTable from './components/UsersTable';
import PromoteUserForm from './components/PromoteUserForm';
import { userRole } from '../../redux/app/state';
import { useSelector } from 'react-redux';
import { selectRole } from '../../redux/app/selectors';

const UsersDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <UsersDiv>
        <h1>Najaktivniji članovi</h1>
        <UsersTable />
        {promoteUserForm()}
      </UsersDiv>
      <Footer />
    </>
  );
};

export default Users;
