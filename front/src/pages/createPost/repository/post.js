import services from '../../../services/index';

export const createPostRepository = async (post, setUploadProgress) => {
  const postDTO = mapPostToDto(post);
  const DTO = {
    post: postDTO,
  };
  const response = await services.post('/posts', DTO);
  const postId = response.data;
  const formData = new FormData();
  const allFiles = post.images.concat(post.documents.concat(post.videos));

  if (allFiles.length > 0) {
    allFiles.forEach((file, index) => {
      formData.append(`files${index}`, file);
    });
    formData.append('postId', postId);

    await services.postFile('/upload/post', formData, setUploadProgress);
  }
};

function mapPostToDto(post) {
  return {
    title: post.title,
    text: post.description,
    type: post.type,
    tags: post.selectedTags.map((selectedTag) => selectedTag.id),
  };
}
