import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { UserRole } from '../enums/user-role.enum';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  userId: number;

  @Column({ type: 'varchar' })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Exclude()
  @Column({ type: 'varchar', default: UserRole.USER, name: 'userRole' })
  role: UserRole;

  @Column({ type: 'int', default: 1 })
  tokenVersion: number;

  // @OneToMany(() => Task, (task) => task.user)
  // tasks: Task[];
}
