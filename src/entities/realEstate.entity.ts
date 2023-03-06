import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";
import User from "./user.entity";

@Entity('real_estates')
export class RealEstate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  area: number;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column({ default: false })
  sold: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;

  @ManyToOne(() => User, user => user)
  user: User;

  @ManyToOne(() => Category, category => category.realEstates)
  category: Category;

  @OneToMany(() => Schedule, schedule => schedule.realEstate)
  schedules: Schedule[];
}
