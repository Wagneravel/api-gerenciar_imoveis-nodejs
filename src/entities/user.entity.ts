import { getRounds, hashSync } from 'bcryptjs';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, BeforeInsert, BeforeUpdate } from 'typeorm';
import { RealEstate } from './realEstates.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({length:45})
  name: string;

  @Column({length:45, unique:true})
  email: string;

  @Column({length:120})
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashInsertPassword(){
    const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
  }

  @Column({ default: false })
  admin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}

export default User;

