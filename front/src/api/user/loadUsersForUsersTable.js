import services from '../../utils/services';

export const loadUsersForUsersTable = async () => {
  return await services.get(`/users/likes`); // [{likes: 6, role: "admin", username: "Darjan"},...]
};
