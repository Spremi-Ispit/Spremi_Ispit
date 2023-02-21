// @ts-nocheck
import dotenv from 'dotenv';
import { Comment } from '../entities/Comment';
import { CommentFile } from '../entities/CommentFile';
import { Post } from '../entities/Post';
import { PostFile } from '../entities/PostFile';
import { Tag } from '../entities/Tag';
import { User } from '../entities/User';
import { Blacklist } from '../entities/Blacklist';
import { DataSource } from 'typeorm';
import mysql from 'mysql2/promise';
// import fs from 'fs';
// import path from 'path';

dotenv.config();

export const initializeDatabase = () => {
  (async () => {
    const connection = await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '12345'
    });

    // await connection.query('DROP DATABASE typeorm');
    await connection.query('CREATE DATABASE IF NOT EXISTS typeorm');

    //*********Tables populating woks from mySqlWorkbench, but not from code*********
    //
    // const typeormDataPath = path.join(
    //   __dirname,
    //   '../../../database/typeorm_data.sql'
    // );

    // const sql = fs.readFileSync(typeormDataPath, 'utf-8');
    // await connection.query(sql);

    dataSource
      .initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });
  })();
};

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345',
  database: 'typeorm',
  entities: [User, Post, Tag, PostFile, Comment, CommentFile, Blacklist],
  synchronize: true
});
