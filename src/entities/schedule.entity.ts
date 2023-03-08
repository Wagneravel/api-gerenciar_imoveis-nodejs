import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstates.entity";
import User from "./user.entity";

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: Date;

  @Column()
  time: string;

  @ManyToOne(() => RealEstate, realEstate => realEstate.schedules)
  realEstate: RealEstate;
  
   // @Column()
   // name: string;
   // @Column()
   // email: string;
   // @Column()
   // phone: string;
   // @Column({ nullable: true })
   // message: string;

  @ManyToOne(() => User )
  user: User;
}