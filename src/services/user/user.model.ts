import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  public id: number;

 @Column({length: 50, unique: true})
 public username: string;

 @Column({length: 100, nullable: true})
 public password: string|undefined;

 @Column({length: 100, nullable: true})
 public passwordHash: string|undefined;

 @Column({length: 10, nullable: true})
 public salt: string|undefined;

 @Column({length: 500})
 public email: string;
}
