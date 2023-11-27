// @ts-nocheck
import { Comment } from '../entities/Comment';
import { CommentFile } from '../entities/CommentFile';
import { Post } from '../entities/Post';
import { PostFile } from '../entities/PostFile';
import { User } from '../entities/User';
import { Blacklist } from '../entities/Blacklist';
import { DataSource } from 'typeorm';
import { Department } from '../entities/filters/Department';
import { Subject } from '../entities/filters/Subject';
import { YearOfStudy } from '../entities/filters/YearOfStudy';
import { Type } from '../entities/filters/Type';
import { YearOfExam } from '../entities/filters/YearOfExam';
import { ExaminationPeriod } from '../entities/filters/ExaminationPeriod';
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
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source initialization', err);
  }
};
