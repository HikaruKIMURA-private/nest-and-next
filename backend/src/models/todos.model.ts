import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TodoStatus {
  wating = 'wating',
  done = 'done',
}

@Entity('todos')
export class TodoModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({type: 'varchar'})
  title: string

  @Column({type: 'varchar'})
  status: TodoStatus

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}