// @ts-nocheck
import {
  Entity,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany
} from 'typeorm';
import { CommentFile } from './CommentFile';
import { Post } from './Post';
import { User } from './User';
import { Annoucment } from './utils/Annoucment';

@Entity()
export class Comment extends Annoucment {
  @OneToMany(() => CommentFile, (file) => file.comment)
  files: CommentFile[];

  @ManyToOne(() => User, (user) => user.comments, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'userId'
  })
  postedBy: User;

  @ManyToOne(() => Post, (post) => post.comments, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'postId'
  })
  post: Post;

  @ManyToMany((type) => User, {
    cascade: true
  })
  @JoinTable({
    name: 'commentLikedBy',
    joinColumn: {
      name: 'commentId',
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
    name: 'commentDislikedBy',
    joinColumn: {
      name: 'commentId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'userId',
      referencedColumnName: 'id'
    }
  })
  dislikedBy: User[];

  @ManyToMany((type) => User, {
    cascade: true
  })
  @JoinTable({
    name: 'commentReportedBy',
    joinColumn: {
      name: 'commentId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'userId',
      referencedColumnName: 'id'
    }
  })
  reportedBy: User[];
}
