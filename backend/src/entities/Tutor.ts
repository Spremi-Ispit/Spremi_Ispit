// @ts-nocheck
import {
  Entity,
  ManyToMany,
  JoinTable,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { Subject } from './filters/Subject';
import { User } from './User';
import { TutoringRequest } from './TutoringRequest';
import { TutorSubject } from './TutorSubject';

@Entity()
export class Tutor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unsigned: true
  })
  price: number;

  @Column({
    nullable: false,
    unsigned: true
  })
  groupPrice: number;

  @Column({
    default: true
  })
  isEnabled: boolean;

  @Column({
    length: 200,
    nullable: false,
    default: ""
  })
  message: string;

  @Column({
    length: 200,
    nullable: false,
    default: ""
  })
  message: string;

  @Column({
    lenght: 200,
    nullable: false,
    default: ""
  })
  chatLink: string;

  @JoinColumn({ name: 'userId' })
  @ManyToOne(() => User, (user) => user.tutor)
  user: User;

  @OneToMany(() => TutorSubject, (TutorSubject) => TutorSubject.tutor)
  tutorSubjects: TutorSubject[];

  @OneToMany(() => TutoringRequest, (tutoringRequest) => tutoringRequest.tutor)
  tutoringOffered: TutoringRequest[];

}