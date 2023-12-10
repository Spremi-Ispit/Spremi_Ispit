// @ts-nocheck
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

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
