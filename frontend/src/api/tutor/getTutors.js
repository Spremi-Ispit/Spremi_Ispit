import services from '../../utils/services';

export const getTutors = async () => {
    return services.get('/tutors/getTutors')
}