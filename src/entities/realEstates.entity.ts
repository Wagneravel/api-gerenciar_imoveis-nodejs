import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";
import User from "./user.entity";


@Entity('real_estates')
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;
  
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: 'int'})
  size: number;

  @Column({ default: false })
  sold: boolean;

  @CreateDateColumn({type:"date"})
  createdAt: string;

  @UpdateDateColumn({type:"date"})
  updatedAt: string;

  @ManyToOne(() => Category, category => category.realEstate,{nullable:true})
  category: Category;

  @OneToMany(() => Schedule, schedule => schedule.realEstate)
  schedules: Schedule[];

  @JoinColumn()
  @OneToOne(() => Address)
  address: Address
  
}


