// @ts-nocheck
import { dataSource } from '../../../database/datasource';
import { Post } from '../../../entities/Post';

export function buildPostsQueryForFilters({
  search,
  order,
  yearOfStudy,
  department,
  subject,
  examinationPeriod,
  type,
  yearOfExam
}) {
  let postsQuery = dataSource.getRepository(Post).createQueryBuilder('post');

  if (yearOfStudy || department || subject) {
    postsQuery.leftJoinAndSelect('post.subject', 'subject');
    postsQuery.groupBy('post.id');

    if (subject) {
      postsQuery.andWhere(`subject.name  =  '${subject}'`);
    }

    if (yearOfStudy) {
      postsQuery.leftJoinAndSelect('subject.yearsOfStudy', 'yearOfStudy');
      postsQuery.andWhere(`yearOfStudy.name =  '${yearOfStudy}'`);
      postsQuery.groupBy('post.id');
    }

    if (department) {
      postsQuery.leftJoinAndSelect('subject.departments', 'department');
      postsQuery.andWhere(`department.name =  '${department}'`);
      postsQuery.groupBy('post.id');
    }
  }

  if (type) {
    postsQuery.andWhere(`post.type = '${type}'`);
  }

  if (examinationPeriod) {
    postsQuery.andWhere(`post.examinationPeriod = '${examinationPeriod}'`);
  }

  if (yearOfExam) {
    postsQuery.andWhere(`post.yearOfExam = '${yearOfExam}'`);
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

  //****it left over from the time when post filters were defined by tags*/
  // if (tags.length > 0) {
  //   postsQuery.leftJoinAndSelect('post.tags', 'tag');
  //   postsQuery.andWhere('tag.id IN (:tags)', { tags });
  //   postsQuery.groupBy('post.id');
  //   postsQuery.having(`COUNT(DISTINCT tag) >= ${tags.length}`);
  // }

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
