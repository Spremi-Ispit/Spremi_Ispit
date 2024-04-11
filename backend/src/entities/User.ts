// @ts-nocheck
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinTable,
  OneToMany,
  OneToOne,
  ManyToMany,
} from 'typeorm';
import { Post } from './Post';
import { Comment } from './Comment';
import { Tutor } from './Tutor';
import { TutoringRequest } from './TutoringRequest';
import { TutorRequestMessage } from './TutorRequestMessage';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    length: 128,
    nullable: false
  })
  username: string;

  @Column({
    unique: true,
    length: 128,
    nullable: false
  })
  email: string;

  @Column({
    length: 128,
    nullable: false
  })
  password: string;

  @Column({
    nullable: false
  })
  role: string;

  @Column({
    default: false,
    nullable: false
  })
  banned: boolean;

  @OneToMany(() => Post, (post) => post.postedBy)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.postedBy)
  comments: Comment[];

  @JoinTable()
  @ManyToMany((type) => Post, {
    cascade: true
  })
  likedPosts: Post[];

  @JoinTable()
  @ManyToMany((type) => Comment, {
    cascade: true
  })
  likedComments: Comment[];

  @JoinTable()
  @ManyToMany((type) => Post, {
    cascade: true
  })
  dislikedPosts: Post[];

  @JoinTable()
  @ManyToMany((type) => Comment, {
    cascade: true
  })
  dislikedComments: Comment[];

  @OneToOne(() => Tutor, (tutor) => tutor.user)
  tutorProfile?: Tutor

  @ManyToMany(() => TutoringRequest, (tutoringRequest) => tutoringRequest.students)
  tutoringRequested: TutoringRequest[];

  @OneToMany(() => TutorRequestMessage, (tutorRequestMessage) => tutorRequestMessage.author)
  tutorRequestMessages: TutorRequestMessage[];

}
