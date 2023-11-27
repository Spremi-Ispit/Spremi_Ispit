// @ts-nocheck
import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { Tag } from '../utils/Tag';
import { Department } from './Department';
import { Subject } from './Subject';

@Entity()
export class YearOfStudy extends Tag {
  @JoinTable()
  @ManyToMany((department) => Department, {
    cascade: true
  })
  departments: Department[];

  @JoinTable()
  @ManyToMany((type) => Subject, {
    cascade: true
  })
  subjects: Subject[];
}
