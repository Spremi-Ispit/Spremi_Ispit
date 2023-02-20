import React from 'react';
import Navbar from '../../components/navbar';
import { ContentContainer } from './styles';
import Footer from '../../components/footer';
import UserForm from './components/userForm';
import { useSelector } from 'react-redux';
import UsersTable from './components/usersTable';
import { userRole } from '../../utils/enums';
import Breadcrumbs from '../../components/breadcrumbs';

const Users = () => {
  const { role } = useSelector((state) => state.app);

  const viewToRender = (
    <>
      <Navbar />
      <Breadcrumbs />
      <ContentContainer>
        <h1>Najaktivniji članovi</h1>
        <UsersTable />
        {role === userRole.admin ? <UserForm /> : null}
      </ContentContainer>
      <Footer />
    </>
  );

  return viewToRender;
};

export default Users;
