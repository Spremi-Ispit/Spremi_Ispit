import services from '../../utils/services';

export const getTutoringRequestsStudent = async () => {
    return services.get('/tutors/getTutoringRequestsStudent/')
}