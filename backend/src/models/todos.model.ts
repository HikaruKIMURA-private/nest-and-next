import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TodoStatus {
  waiting = 'waiting',
  done = 'done',
}


export interface Todo {
  id: string
  title: string
  status: TodoStatus
  created_at: Date
  updated_at: Date
}