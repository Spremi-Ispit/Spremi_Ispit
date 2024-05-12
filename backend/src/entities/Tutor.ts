// @ts-nocheck
import {
  Entity,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';
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
    default: ''
  })
  message: string;

  @Column({
    length: 200,
    nullable: false,
    default: ''
  })
  message: string;

  @Column({
    lenght: 200,
    nullable: false,
    default: ''
  })
  phone: string;

  @OneToMany(() => TutorSubject, (TutorSubject) => TutorSubject.tutor)
  tutorSubjects: TutorSubject[];
}
