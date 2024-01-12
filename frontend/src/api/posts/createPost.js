import services from '../../utils/services';

export const createPost = async (post, setUploadProgress) => {
  const { title, description, attachments, filters } = post;
  const postId = await services.post('/posts', {
    post: {
      title,
      text: description,
      filters,
    },
  });

  if (attachments.length > 0) {
    const formData = new FormData();
    attachments.forEach((file, index) => {
      formData.append(`files${index}`, file);
    });
    formData.append('postId', postId);

    await services.postFile('/upload/post', formData, setUploadProgress);
  }

  return postId;
};
