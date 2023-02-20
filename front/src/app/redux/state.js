import { userRole } from '../../utils/enums';

export const initialState = {
  token: null,
  role: userRole.visitor,
  username: null,
  history: [
    {
      pathname: '/',
      search: 'order=newest&type=all',
    },
  ],
};

const getState = () => {
  if (localStorage.getItem('app') === null)
    localStorage.setItem('app', JSON.stringify(initialState));

  return JSON.parse(localStorage.getItem('app'));
};

export default getState();
