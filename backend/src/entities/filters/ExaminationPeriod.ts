// @ts-nocheck
import { Entity, OneToMany } from 'typeorm';
import { Post } from '../Post';
import { Tag } from '../utils/Tag';

@Entity()
export class ExaminationPeriod extends Tag {
  @OneToMany(() => Post, (post) => post.examinationPeriod)
  posts: Post[];
}
