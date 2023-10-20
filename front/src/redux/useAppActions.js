import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator as appActionCreator } from './app/actions';
import { actionCreator as homeActionCreator } from './home/actions';
import { actionCreator as profileActionCreator } from './profile/actions';
import { actionCreator as usersActionCreator } from './users/actions';
import { actionCreator as viewPostActionCreator } from './viewPost/actions';

// eslint-disable-next-line
export const useAppActions = () => {
  const dispatch = useDispatch();

  const createActions = () => ({
    appActions: bindActionCreators(appActionCreator, dispatch),
    homeActions: bindActionCreators(homeActionCreator, dispatch),
    profileActions: bindActionCreators(profileActionCreator, dispatch),
    usersActions: bindActionCreators(usersActionCreator, dispatch),
    viewPostActions: bindActionCreators(viewPostActionCreator, dispatch),
  });

  return useMemo(createActions, [dispatch]);
};
