// @ts-nocheck
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany } from 'typeorm';
import { Post } from './Post';

@Entity()
export class File extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 256,
    nullable: false
  })
  ext: string;

  @Column({
    length: 256,
    nullable: false
  })
  path: string;
}
