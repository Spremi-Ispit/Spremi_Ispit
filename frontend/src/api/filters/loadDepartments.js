import services from '../../utils/services';

export const loadDepartments = async (selectedYearOfStudy) => {
  return await services.get(
    `/filters/department?yearOfStudy=${selectedYearOfStudy}`
  );
};
