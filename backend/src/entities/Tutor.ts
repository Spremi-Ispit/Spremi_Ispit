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

  @JoinColumn({ name: 'userId' })
  @ManyToOne(() => User, (user) => user.tutor)
  user: User;

  @JoinTable()
  @ManyToMany((type) => Subject, {
    cascade: true
  })
  tutoringSubjects: Subject[];

  @OneToMany(() => TutoringRequest, (tutoringRequest) => tutoringRequest.tutor)
  tutoringOffered: TutoringRequest[];

}