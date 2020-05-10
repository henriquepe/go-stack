import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export default class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  project: string;

  @Column('varchar')
  link: string;
}
