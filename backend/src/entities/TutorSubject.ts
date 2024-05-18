import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Tutor } from './Tutor';
import { Subject } from './filters/Subject';

@Entity()
export class TutorSubject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: true
  })
  isEnabled: boolean;

  @ManyToOne(() => Tutor, (tutor) => tutor.tutorSubjects)
  tutor: Tutor;

  @JoinColumn()
  @ManyToOne(() => Subject, (subject) => subject.tutorSubjects)
  subject: Subject;
}
