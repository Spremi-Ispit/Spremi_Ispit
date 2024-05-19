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
    unsigned: true,
    default: 0
  })
  price: number;

  @Column({
    nullable: false,
    unsigned: true,
    default: 0
  })
  groupPrice: number;

  @Column({
    default: false
  })
  isEnabled: boolean;

  @Column({
    length: 1024,
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

  @Column({
    default: 0
  })
  likes: number;

  @Column({
    default: 0
  })
  dislikes: number;

  @Column({
    length: 200,
    nullable: false,
    default: ''
  })
  name: string;

  @Column({
    length: 512,
    nullable: false,
    default: ''
  })
  link: string;
}
