// @ts-nocheck
import {
  Entity,
  Column,
  Index,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Comment } from './Comment';
import { PostFile } from './PostFile';
import { Tag } from './Tag';
import { User } from './User';

import { Annoucment } from './utils/Annoucment';

@Entity()
export class Post extends Annoucment {
  @Index({ fulltext: true })
  @Column({
    length: 100,
    nullable: false
  })
  title: string;

  @Column({
    length: 100,
    nullable: false
  })
  type: string;

  @OneToMany(() => PostFile, (file) => file.post)
  files: PostFile[];

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'userId'
  })
  postedBy: User;

  @ManyToMany((type) => User, {
    cascade: true
  })
  @JoinTable({
    name: 'postLikedBy',
    joinColumn: {
      name: 'postId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'userId',
      referencedColumnName: 'id'
    }
  })
  likedBy: User[];

  @ManyToMany((type) => User, {
    cascade: true
  })
  @JoinTable({
    name: 'postDislikedBy',
    joinColumn: {
      name: 'postId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'userId',
      referencedColumnName: 'id'
    }
  })
  dislikedBy: User[];

  @ManyToMany((type) => Tag)
  @JoinTable({
    name: 'post_tag',
    joinColumn: {
      name: 'postId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'tagId',
      referencedColumnName: 'id'
    }
  })
  tags: Tag[];

  @ManyToMany((type) => User, {
    cascade: true
  })
  @JoinTable({
    name: 'postReportedBy',
    joinColumn: {
      name: 'postId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'userId',
      referencedColumnName: 'id'
    }
  })
  reportedBy: User[];
}
