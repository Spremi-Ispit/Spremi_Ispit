// @ts-nocheck
import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Post } from './Post';
import { File } from './utils/File';

@Entity()
export class PostFile extends File {
  @ManyToOne(() => Post, (post) => post.files, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'postId'
  })
  post: Post;
}
