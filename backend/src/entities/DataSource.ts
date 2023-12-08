// @ts-nocheck
import { Comment } from './Comment';
import { CommentFile } from './CommentFile';
import { Post } from './Post';
import { PostFile } from './PostFile';
import { User } from './User';
import { Blacklist } from './Blacklist';
import { DataSource } from 'typeorm';
import { Department } from './filters/Department';
import { Subject } from './filters/Subject';
import { YearOfStudy } from './filters/YearOfStudy';
import { Type } from './filters/Type';
import { YearOfExam } from './filters/YearOfExam';
import { ExaminationPeriod } from './filters/ExaminationPeriod';
import env from '../config/env';

export const dataSource = new DataSource({
  type: 'mysql',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.DB_NAME,
  entities: [
    User,
    Post,
    Department,
    Subject,
    YearOfStudy,
    YearOfExam,
    Type,
    ExaminationPeriod,
    PostFile,
    Comment,
    CommentFile,
    Blacklist
  ],
  synchronize: false
});

export const initializeDatasource = async () => {
  try {
    await dataSource.initialize();
    console.log('');
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source initialization', err);
  }
};
