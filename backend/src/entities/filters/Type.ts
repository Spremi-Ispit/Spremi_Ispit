// @ts-nocheck
import { Entity, OneToMany } from 'typeorm';
import { Post } from '../Post';
import { Tag } from '../utils/Tag';

@Entity()
export class Type extends Tag {
  @OneToMany(() => Post, (post) => post.type)
  posts: Post[];
}
