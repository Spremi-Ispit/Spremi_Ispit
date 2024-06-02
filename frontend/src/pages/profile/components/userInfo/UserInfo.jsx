import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../../../../components/Loader';
import AdminControlls from './components/AdminControlls';
import { userRole } from '../../../../redux/app/state';
import Error from '../../../../components/dialogs/Error';
import { useUrlManager } from '../../../../utils/managers/UrlManager';
import { selectRole, selectUsername } from '../../../../redux/app/selectors';
import UserView from './components/UserView/UserView';
import { useFetch } from '../../../../api/useFetch';
import { loadUserInfo } from '../../../../api/actions/user/loadUserInfo';

export const UserInfo = () => {
  const urlManager = useUrlManager();
  const { urlUsername } = urlManager.getParams();
  const role = useSelector(selectRole);
  const username = useSelector(selectUsername);

  const [user, setUser] = useState(null);

  const { data, loaded, error, fetch } = useFetch(loadUserInfo);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  useEffect(() => {
    if (urlUsername) {
      fetch(urlUsername);
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
      <AdminControlls user={user} reloadUserInfo={() => fetch(urlUsername)} />
    );
  }

  return null;
};

export default UserInfo;
