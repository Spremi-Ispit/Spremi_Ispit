import { setToken, setRole, setUsername } from '../../../app/redux/slices';
import { setError, setLoading } from '../redux/slices';
import { loginUserRepository } from '../repository/auth';
import serialize from '../../../utils/serialize';

export const login = (email, password) => async (dispatch, getState) => {
  const DTO = {
    email,
    password,
  };

  try {
    dispatch(setLoading(true));
    const user = await loginUserRepository(DTO);
    dispatch(setToken(user.token));
    dispatch(setRole(user.role));
    dispatch(setUsername(user.username));
  } catch (err) {
    dispatch(setError(serialize(err)));
  } finally {
    dispatch(setLoading(false));
  }
};
