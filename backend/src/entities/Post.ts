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
import { User } from './User';
import { Annoucment } from './utils/Annoucment';
import { Subject } from './filters/Subject';
import { Type } from './filters/Type';
import { YearOfExam } from './filters/YearOfExam';
import { ExaminationPeriod } from './filters/ExaminationPeriod';

@Entity()
export class Post extends Annoucment {
  @Index({ fulltext: true })
  @Column({
    length: 100,
    nullable: false
  })
  title: string;

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

  @ManyToOne(() => Subject, (subject) => subject.posts, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'subjectId'
  })
  subject: Subject;

  @ManyToOne(() => Type, (type) => type.posts, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'typeId'
  })
  type: Type;

  @ManyToOne(() => YearOfExam, (yearOfExam) => yearOfExam.posts, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'yearOfExamId'
  })
  yearOfExam: YearOfExam;

  @ManyToOne(
    () => ExaminationPeriod,
    (examinationPeriod) => examinationPeriod.posts,
    {
      onDelete: 'CASCADE'
    }
  )
  @JoinColumn({
    name: 'examinationPeriodId'
  })
  examinationPeriod: ExaminationPeriod;

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
