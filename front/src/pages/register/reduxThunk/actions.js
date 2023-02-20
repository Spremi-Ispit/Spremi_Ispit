import { setToken, setRole, setUsername } from '../../../app/redux/slices';
import { setError, setLoading } from '../redux/slices';
import { registerUserRepository } from '../repository/auth';
import serialize from '../../../utils/serialize';

export const register = (email, password) => async (dispatch, getState) => {
  const DTO = {
    email,
    password,
  };

  try {
    dispatch(setLoading(true));
    const user = await registerUserRepository(DTO);
    dispatch(setToken(user.token));
    dispatch(setRole(user.role));
    dispatch(setUsername(user.username));
  } catch (err) {
    dispatch(setError(serialize(err)));
  } finally {
    dispatch(setLoading(false));
  }
};
