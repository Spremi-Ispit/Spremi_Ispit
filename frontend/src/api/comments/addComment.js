import services from '../../utils/services';

export const addComment = async (comment, postID, setUploadProgress) => {
  const { description, attachments } = comment;

  const commentId = await services.post('/comments', {
    text: description,
    postID,
  });

  if (attachments.length > 0) {
    const formData = new FormData();
    attachments.forEach((file, index) => {
      formData.append(`files${index}`, file);
    });
    formData.append('commentId', commentId);

    return await services.postFile(
      '/upload/comment',
      formData,
      setUploadProgress
    );
  }

  return commentId;
};

export default addComment;
