import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { RealEstate } from './realEstates.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ nullable: true, length: 6 })
  number?: string;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 2 })
  state: string;
}

