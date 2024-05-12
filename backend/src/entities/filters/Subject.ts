import {
  Entity,
  ManyToMany,
  JoinTable,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';
import { Post } from '../Post';
import { YearOfStudy } from './YearOfStudy';
import { Department } from './Department';
import { TutorSubject } from '../TutorSubject';
@Entity()
export class Subject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    nullable: false
  })
  name: string;

  @ManyToMany((department) => Department, {
    cascade: true
  })
  @JoinTable({
    name: 'subjectOnDepartment',
    joinColumn: {
      name: 'subjectId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'departmentId',
      referencedColumnName: 'id'
    }
  })
  departments: Department[];

  @ManyToMany((yearOfStudy) => YearOfStudy, {
    cascade: true
  })
  @JoinTable({
    name: 'subjectOnYearOfStudy',
    joinColumn: {
      name: 'subjectId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'yearOfStudyId',
      referencedColumnName: 'id'
    }
  })
  yearsOfStudy: YearOfStudy[];

  @OneToMany(() => Post, (post) => post.subject)
  posts: Post[];

  @OneToMany(() => TutorSubject, (tutorSubject) => tutorSubject.subject)
  tutorSubjects: TutorSubject[];
}
