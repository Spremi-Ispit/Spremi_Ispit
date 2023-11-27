// @ts-nocheck
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from 'typeorm';

@Entity()
export class Blacklist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    length: 128,
    nullable: false
  })
  email: string;

  @CreateDateColumn()
  date: Date;
}
