// @ts-nocheck
import response from '../utils/response/index';
import { checkIfLogged } from '../utils/tokenValidation';
import { postLikeDislikeStatus, postType } from '../utils/enums';
import { removeCommentFiles, removePostFiles } from './fileServices';
import HttpStatus from '../utils/response/httpStatus';
import { Post } from '../entities/Post';
import { User } from '../entities/User';
import { Tag } from '../entities/Tag';
import { In, IsNull, Not } from 'typeorm';
import { Comment } from '../entities/Comment';
import { dataSource } from '../utils/database';

export const getPostsByUsername = async (req) => {
  const { username, userID } = req.query;

  const user = await User.findOne({
    where: {
      username: username
    },
    relations: [
      'posts',
      'posts.files',
      'posts.tags',
      'posts.likedBy',
      'posts.dislikedBy'
    ]
  });

  const userPosts = [];
  if (user) {
    user.posts.forEach((post) => {
      userPosts.push({
        id: post.id,
        title: post.title,
        text: post.text,
        type: post.type,
        date: post.date,
        likes: post.likedBy.length,
        dislikes: post.dislikedBy.length,
        username: user.username,
        userId: user.id,
        tags: post.tags,
        owner: user.id === userID,
        files: post.files,
        likeStatus: postLikeDislikeStatus.none
      });
    });
    return response.OK('Posts found', userPosts);
  } else {
    return response.NOT_FOUND('User not found');
  }
};

export const getPostById = async (req) => {
  const status = checkIfLogged(req);
  const userID = status.userID;
  const { id } = req.params;
  const post = await Post.findOne({
    where: {
      id: id
    },
    relations: ['postedBy', 'files', 'tags', 'likedBy', 'dislikedBy']
  });

  let likedStatus = postLikeDislikeStatus.none;
  if (userID) {
    const liked = post?.likedBy.find((user) => user.id === userID);
    if (liked) {
      likedStatus = postLikeDislikeStatus.liked;
    }

    const disliked = post?.dislikedBy.find((user) => user.id === userID);
    if (disliked) {
      likedStatus = postLikeDislikeStatus.disliked;
    }
  }

  if (post) {
    const postToReturn = {
      id: post.id,
      title: post.title,
      text: post.text,
      type: post.type,
      date: post.date,
      likes: post.likedBy.length,
      dislikes: post.dislikedBy.length,
      postedBy: post.postedBy.username,
      userId: post.postedBy.id,
      tags: post.tags,
      owner: userID && userID === post.postedBy.id,
      files: post.files,
      likeStatus: likedStatus
    };
    return response.OK('Posts found', postToReturn);
  } else {
    return response.NOT_FOUND('Post not found');
  }
};

export const createPost = async (req) => {
  const { userID, post } = req.body;
  const { title, text, type, tags: postTags } = post;
  const user = await User.findOneBy(userID);
  const tags = await Tag.find({
    where: {
      id: In(postTags)
    }
  });

  if (user && tags.length > 0) {
    const postEntity = Post.create({
      title,
      text,
      type,
      postedBy: user,
      tags: tags
    });
    await postEntity.save();
    return response.OK(`Post created`, postEntity.id);
  } else {
    return response.BAD_REQUEST(`Bad request`);
  }
};

export const deletePost = async (req) => {
  const { id } = req.params;

  const post = await Post.findOne({
    where: {
      id: id
    }
  });
  if (post) {
    await removePostFiles(post.id);

    const comments = await Comment.find({
      post
    });

    for (const comment of comments) {
      await removeCommentFiles(comment.id);
    }

    await post.remove();
    return response.OK('Post deleted');
  } else {
    return response.NOT_FOUND('Post not found', id);
  }
};

export const reportPost = async (req) => {
  const { postID, userID } = req.body;

  const user = await User.findOneBy(userID);
  const post = await Post.findOne({
    where: {
      id: postID
    },
    relations: ['reportedBy']
  });
  if (user && post) {
    const reported = post.reportedBy.find((user) => user.id === userID);
    if (reported) {
      return response.BAD_REQUEST(`Already reported`);
    }
    post.reportedBy.push(user);
    await post.save();
    return response.OK(`Report created`);
  } else {
    return response.NOT_FOUND(`An unexpected error occured`);
  }
};

export const dismissReport = async (req) => {
  const { reportedById, postID } = req.params;

  const post = await Post.findOne({
    where: {
      id: postID
    },
    relations: ['reportedBy']
  });
  if (post) {
    post.reportedBy.splice(
      post.reportedBy.indexOf((user) => user.id === reportedById),
      1
    );
    await post.save();
    return response.OK('Report dissmised');
  } else {
    return response.BAD_REQUEST(`post not found.`);
  }
};

export const getReportedPosts = async (req) => {
  const reportedPosts = await Post.find({
    where: {
      reportedBy: [{ id: Not(IsNull()) }]
    },
    select: {
      id: true
    }
  });

  const postsToReturn = [];

  for (const reportedPost of reportedPosts) {
    req.params.id = reportedPost.id;
    const response = await getPostById(req);

    if (response.httpStatus === HttpStatus.OK.status) {
      postsToReturn.push(response.data);
    }
  }

  return response.OK('Reported posts', postsToReturn);
};

export const getPostsForHomepageFilters = async (req) => {
  // { search, startIndex, count, tags, type, order } = req.body; //body contains all these parameters
  let { startIndex, count } = req.body;
  let postsQuery = buildPostsQueryForHomepageFilters(req);

  const perPage = count;
  const page = Math.floor(startIndex / count) + 1;
  const skip = perPage * page - perPage;

  postsQuery = postsQuery.skip(skip).take(perPage);

  let postResults = await postsQuery.getRawAndEntities();

  let postsIds = [];

  postResults.raw.forEach((post) => {
    postsIds.push(post.post_id);
  });

  const posts = await Post.find({
    where: {
      id: In(postsIds)
    },
    relations: ['postedBy', 'files', 'tags', 'likedBy', 'dislikedBy']
  });

  const status = checkIfLogged(req);
  const userID = status.userID;

  const totalNumberOfPosts = await getTotalNumberOfPostsForHomepageFilters(req);

  const data = {
    totalNumberOfPosts: totalNumberOfPosts,
    totalNumberOfPages: Math.ceil(totalNumberOfPosts / count),
    posts: (() => {
      const postArray = [];
      postsIds.forEach((id, index) => {
        const post = posts.find((post) => post.id === id);
        if (post) {
          postArray.push({
            id: post.id,
            text: post.text,
            date: post.date,
            title: post.title,
            type: post.type,
            likes: post.likedBy.length,
            dislikes: post.dislikedBy.length,
            postedBy: post.postedBy.username,
            userId: post.postedBy.id,
            tags: post.tags,
            owner: checkOwner(userID, post),
            files: post.files,
            likeStatus: getPostLikeDislikeStatus(userID, post)
          });
        }
      });
      return postArray;
    })()
  };

  return response.OK(`Posts retrived`, data);
};

/* - - - - - - - - - - - - - - -HELPERS- - - - - - - - - - - - - - - */

function checkOwner(userID, post) {
  return userID != null && userID === post.postedBy.id;
}

async function getTotalNumberOfPostsForHomepageFilters(req) {
  let postsQuery = buildPostsQueryForHomepageFilters(req);
  let postResults = await postsQuery.getRawAndEntities();

  let postsIds = [];

  postResults.raw.forEach((post) => {
    postsIds.push(post.post_id);
  });

  return postsIds.length;
}

function buildPostsQueryForHomepageFilters(req) {
  const { search, tags, type, order } = req.body;
  let postsQuery = dataSource.getRepository(Post).createQueryBuilder('post');

  if (type === postType.material || type === postType.question) {
    postsQuery.where(`post.type = '${type}'`);
  }

  if (search?.trim() !== '') {
    const openedBracket = '(';
    const closedBracket = ')';
    postsQuery.andWhere(
      `${openedBracket}MATCH(post.text) AGAINST(:search IN BOOLEAN MODE) OR
     MATCH(post.title) AGAINST(:search IN BOOLEAN MODE)${closedBracket}`,
      { search: `${search}*` }
    );
  }

  if (tags.length > 0) {
    postsQuery.leftJoinAndSelect('post.tags', 'tag');
    postsQuery.andWhere('tag.id IN (:tags)', { tags });
    postsQuery.groupBy('post.id');
    postsQuery.having(`COUNT(DISTINCT tag) >= ${tags.length}`);
  }

  postsQuery
    .select('post.id')
    .addSelect('post.date')
    .addSelect('COUNT(likedBy.id)', 'likes')
    .leftJoin('post.likedBy', 'likedBy')
    .groupBy('post.id')
    .addSelect('COUNT(dislikedBy.id)', 'dislikes')
    .leftJoin('post.dislikedBy', 'dislikedBy')
    .groupBy('post.id');

  const orderSql = {
    newest: 'post.date',
    like: 'likes',
    dislike: 'dislikes'
  };

  postsQuery = postsQuery.orderBy(orderSql[order], 'DESC');

  return postsQuery;
}

function getPostLikeDislikeStatus(userID, post) {
  let likedStatus = postLikeDislikeStatus.none;
  if (userID) {
    const liked = post?.likedBy.find((user) => user.id === userID);
    if (liked) {
      likedStatus = postLikeDislikeStatus.liked;
    }

    const disliked = post?.dislikedBy.find((user) => user.id === userID);
    if (disliked) {
      likedStatus = postLikeDislikeStatus.disliked;
    }
  }

  return likedStatus;
}
