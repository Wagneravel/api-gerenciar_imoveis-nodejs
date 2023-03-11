import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";
import User from "./user.entity";


@Entity('real_estates')
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;
  
  @Column({ type: 'decimal', precision: 11, scale: 2 })
  value: number | string;

  @Column({ type: 'int'})
  size: number;

  @Column({ default: false })
  sold: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;

  @ManyToOne(() => Category, category => category.realEstates)
  category: Category;

  @OneToMany(() => Schedule, schedule => schedule.realEstate)
  schedules: Schedule[];

  @JoinColumn()
  @OneToOne(() => Address)
  address: Address
  
}


