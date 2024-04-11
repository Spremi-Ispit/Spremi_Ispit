import {
  Entity,
  ManyToMany,
  JoinTable,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Subject } from './filters/Subject';
import { User } from './User';
import { Tutor } from './Tutor';
import { TutorRequestMessage } from './TutorRequestMessage';

@Entity()
export class TutoringRequest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: false,
    nullable: false
  })
  isFinished: boolean;

  @Column({
    default: false,
    nullable: false
  })
  isCanceled: boolean;

  @Column({
    default: 0,
    nullable: false
  })
  rating: number;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => Tutor, (tutor) => tutor.tutoringOffered)
  tutor: Tutor;

  @JoinTable()
  @ManyToMany(() => User, (user) => user.tutoringRequested)
  students: User[];

  @ManyToOne(() => Subject)
  subject: Subject;

  @OneToMany(() => TutorRequestMessage, (tutorRequestMessage) => tutorRequestMessage.tutoringRequest)
  tutorRequestMessages: TutorRequestMessage[];

}