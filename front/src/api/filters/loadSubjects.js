import services from '../../utils/services';

export const loadSubjects = async (selectedYearOfStudy, selectedDepartment) => {
  return await services.get(
    `/filters/subject?yearOfStudy=${selectedYearOfStudy}&department=${selectedDepartment}`
  );
};
