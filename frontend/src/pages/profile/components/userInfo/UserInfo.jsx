import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../../../../components/Loader';
import AdminControlls from './components/AdminControlls';
import { userRole } from '../../../../redux/app/state';
import Error from '../../../../components/dialogs/Error';
import { useUrlManager } from '../../../../utils/managers/UrlManager';
import { selectRole, selectUsername } from '../../../../redux/app/selectors';
import { useApiActions } from '../../../../api/useApiActions';
import UserView from './components/UserView/UserView';

export const UserInfo = () => {
  const urlManager = useUrlManager();
  const { urlUsername } = urlManager.getParams();
  const role = useSelector(selectRole);
  const username = useSelector(selectUsername);

  const [user, setUser] = useState(null);

  const { loadUserInfo } = useApiActions();
  const { response, loaded, error, action } = loadUserInfo;

  useEffect(() => {
    if (response) {
      setUser(response);
    }
  }, [response]);

  useEffect(() => {
    if (urlUsername) {
      action(urlUsername);
    }
  }, [urlUsername]);

  if (error) {
    return <Error error={error} />;
  }

  if (!loaded) {
    return <Loader />;
  }

  if (!user) {
    return <h1>Učitavanje informacija je neuspešno</h1>;
  }

  if (urlUsername === username) {
    return <UserView user={user} />;
  }

  if (role === userRole.admin) {
    return (
      <AdminControlls user={user} reloadUserInfo={() => action(urlUsername)} />
    );
  }

  return null;
};

export default UserInfo;
