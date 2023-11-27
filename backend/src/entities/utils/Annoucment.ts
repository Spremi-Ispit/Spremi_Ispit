// @ts-nocheck
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  Index
} from 'typeorm';

@Entity()
export class Annoucment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column({
    length: 1000,
    nullable: false
  })
  text: string;

  @CreateDateColumn()
  date: Date;
}
