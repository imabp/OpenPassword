import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
    
  @Column("text")
  userid: string;

  @Column("text")
  data: string;
} 
