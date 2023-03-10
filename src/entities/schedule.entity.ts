import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstates.entity";
import User from "./user.entity";

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @ManyToOne(() => RealEstate, realEstate => realEstate.schedules)
  realEstate: RealEstate;
  
  @ManyToOne(() => User )
  user: User;
}