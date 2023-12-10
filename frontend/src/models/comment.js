import annoucment from './base/annoucment';

export const comment = (data) => ({ ...annoucment(data), postId: data.postId });

export default comment;
