import services from '../../utils/services';

export const getTutoringRequests = async () => {
    return services.get('/tutors/getTutoringRequests/')
}