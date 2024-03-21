// @ts-nocheck
import {
    Entity,
    ManyToMany,
    JoinTable,
    OneToMany,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
  } from 'typeorm';
import { Subject } from './filters/Subject';
import { User } from './User';
import { Tutor } from './Tutor';

  @Entity()
  export class TutoringRequest extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        lenght: 200,
        nullable: false
    })
    message: string;

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
    rating : number;
    
    @ManyToOne(() => Tutor, (tutor) => tutor.tutoringOffered)
    tutor: Tutor;
  
    @ManyToOne(() => User, (user) => user.tutoringRequested)
    student: User;
  
    @ManyToOne(() => Subject)
    subject: Subject;
  }