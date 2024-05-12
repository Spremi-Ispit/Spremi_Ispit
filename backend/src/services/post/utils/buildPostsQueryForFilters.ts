// @ts-nocheck
import { dataSource } from '../../../entities';
import { Post } from '../../../entities/Post';

export function buildPostsQueryForFilters({
  search,
  order,
  yearOfStudy,
  department,
  subject,
  examinationPeriod,
  type,
  yearOfExam,
  commentedPosts
}) {
  let postsQuery = dataSource.getRepository(Post).createQueryBuilder('post');

  if (yearOfStudy || department || subject) {
    postsQuery.leftJoinAndSelect('post.subject', 'subject');

    if (subject) {
      postsQuery.andWhere(`subject.name  =  '${subject}'`);
    }

    if (yearOfStudy) {
      postsQuery.leftJoinAndSelect('subject.yearsOfStudy', 'yearOfStudy');
      postsQuery.andWhere(`yearOfStudy.name =  '${yearOfStudy}'`);
    }

    if (department) {
      postsQuery.leftJoinAndSelect('subject.departments', 'department');
      postsQuery.andWhere(`department.name =  '${department}'`);
    }
  }

  if (type) {
    postsQuery.leftJoinAndSelect('post.type', 'type');
    postsQuery.andWhere(`type.name  =  '${type}'`);
  }

  if (examinationPeriod) {
    postsQuery.leftJoinAndSelect('post.examinationPeriod', 'examinationPeriod');
    postsQuery.andWhere(`examinationPeriod.name  =  '${examinationPeriod}'`);
  }

  if (yearOfExam) {
    postsQuery.leftJoinAndSelect('post.yearOfExam', 'yearOfExam');
    postsQuery.andWhere(`yearOfExam.name  =  '${yearOfExam}'`);
  }

  if (search && search.trim() !== '') {
    const openedBracket = '(';
    const closedBracket = ')';
    postsQuery.andWhere(
      `${openedBracket}MATCH(post.text) AGAINST(:search IN BOOLEAN MODE) OR
     MATCH(post.title) AGAINST(:search IN BOOLEAN MODE)${closedBracket}`,
      { search: `${search}*` }
    );
  }

  postsQuery.select('post.id');

  if (commentedPosts) {
    postsQuery
      .leftJoin('post.comments', 'comments')
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(comments.id)', 'comment_count')
          .from('comment', 'comments')
          .where('comments.postId = post.id');
      }, 'comment')
      .having('COUNT(comments.id) > 0');
  }

  postsQuery.addSelect('post.date').addSelect((subQuery) => {
    return subQuery
      .select('COUNT(likedBy.id)', 'like_count')
      .from('postLikedBy', 'post_likedBy')
      .innerJoin('user', 'likedBy', 'likedBy.id = post_likedBy.userId')
      .where('post_likedBy.postId = post.id');
  }, 'likes');

  postsQuery.addSelect((subQuery) => {
    return subQuery
      .select('COUNT(dislikedBy.id)', 'dislike_count')
      .from('postDislikedBy', 'post_dislikedBy')
      .innerJoin('user', 'dislikedBy', 'dislikedBy.id = post_dislikedBy.userId')
      .where('post_dislikedBy.postId = post.id');
  }, 'dislikes');

  const orderSql = {
    newest: 'post.date',
    like: 'likes',
    dislike: 'dislikes'
  };

  postsQuery = postsQuery.groupBy('post.id').orderBy(orderSql[order], 'DESC');

  return postsQuery;
}
