import services from '../../../services';
import { formatDate } from '../../../utils/dateFormater';

export const getCommentsRepository = async (postId) => {
  const dto = await services.get(`/comments/post/${postId}`);
  return mapDTOToComments(dto.data);
};

export const mapDTOToComment = (dto) => {
  return {
    ...dto,
    date: formatDate(new Date(dto.date)),
  };
};

export const mapDTOToComments = (dto) => {
  return dto.map((comment) => mapDTOToComment(comment));
};

export const addCommentRepository = async (comment, setUploadProgress) => {
  const commentDTO = mapCommentToDto(comment);
  const DTO = {
    comment: commentDTO,
  };
  const response = await services.post('/comments', DTO);
  const commentId = response.data;
  console.log(comment);
  const formData = new FormData();
  const allFiles = comment.images.concat(
    comment.documents.concat(comment.videos)
  );
  console.log(allFiles);

  if (allFiles.length > 0) {
    console.log('testtest');
    allFiles.forEach((file, index) => {
      formData.append(`files${index}`, file);
    });
    formData.append('commentId', commentId);

    await services.postFile('/upload/comment', formData, setUploadProgress);
  }
};

export const addCommentLikeRepository = async (data) => {
  const dto = await services.post('/comments/like', data);
  return dto.data;
};

export const removeCommentLikeRepository = async (data) => {
  const dto = await services.delete('/comments/like', data);
  return dto.data;
};

export const addCommentDislikeRepository = async (data) => {
  const dto = await services.post('/comments/dislike', data);
  return dto.data;
};

export const removeCommentDislikeRepository = async (data) => {
  const dto = await services.delete('/comments/dislike', data);
  return dto.data;
};

function mapCommentToDto(comment) {
  return {
    text: comment.description,
    postID: comment.postID,
  };
}

export const deleteCommentRepository = async (commentId) => {
  const dto = await services.delete(`/comments/commentId/${commentId}`);
  return dto.data;
};

export const reportCommentRepository = async (DTO) => {
  const dto = await services.post(`/comments/report`, DTO);
  return dto.data;
};
