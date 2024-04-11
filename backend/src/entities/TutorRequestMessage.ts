import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    JoinColumn
} from 'typeorm';
import { TutoringRequest } from './TutoringRequest';
import { User } from './User';

@Entity()
export class TutorRequestMessage extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @CreateDateColumn()
    date: Date;

    @ManyToOne(() => TutoringRequest, (tutoringRequest) => tutoringRequest.tutorRequestMessages)
    tutoringRequest: TutoringRequest;

    @ManyToOne(() => User, (user) => user.tutorRequestMessages)
    author: User;

}