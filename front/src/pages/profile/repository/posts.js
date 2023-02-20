import services from '../../../services';
import { formatDate } from '../../../utils/dateFormater';

export const loadUserPostsRepository = async (username) => {
  const dto = await services.get(`/posts/user?username=${username}`);
  return mapDTOToPosts(dto.data);
};

export const loadReportedPostsRepository = async () => {
  const dto = await services.get(`/posts/reports`);
  return mapDTOToPosts(dto.data);
};

export const mapDTOToPost = (dto) => {
  return {
    ...dto,
    date: formatDate(new Date(dto.date)),
    postedBy: dto.username,
  };
};

export const mapDTOToPosts = (dto) => {
  return dto.map((post) => mapDTOToPost(post));
};

export const dismissReportRepository = async (postId, reportedById) => {
  const dto = await services.delete(
    `/posts/dismissReport/postId/${postId}/reportedById/${reportedById}`
  );
  return dto.data;
};
