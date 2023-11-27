// @ts-nocheck
import { Entity, ManyToMany, JoinTable } from 'typeorm';
import { Subject } from './Subject';
import { Tag } from '../utils/Tag';
import { YearOfStudy } from './YearOfStudy';

@Entity()
export class Department extends Tag {
  @JoinTable()
  @ManyToMany((type) => Subject, {
    cascade: true
  })
  subjects: Subject[];

  @ManyToMany((yearOfStudy) => YearOfStudy, {
    cascade: true
  })
  @JoinTable({
    name: 'yearOfStudyOnDepartment',
    joinColumn: {
      name: 'departmentId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'yearOfStudyId',
      referencedColumnName: 'id'
    }
  })
  yearsOfStudy: YearOfStudy[];
}
