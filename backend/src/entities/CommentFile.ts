// @ts-nocheck
import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Comment } from './Comment';
import { File } from './utils/File';

@Entity()
export class CommentFile extends File {
  @ManyToOne(() => Comment, (comment) => comment.files, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'commentId'
  })
  comment: Comment;
}
