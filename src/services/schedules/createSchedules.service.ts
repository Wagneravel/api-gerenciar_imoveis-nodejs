import { Between, Repository } from "typeorm";
import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iScheduleRequest, iScheduleReturn } from "../../interfaces/schedule.interface";

require('dotenv').config();

export async function scheduleVisitService(userId: number, scheduleData: iScheduleRequest): Promise<iScheduleReturn> {
    
    const { date, hour } = scheduleData;

    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const user = await userRepository.findOneBy({id: userId})
    if (!user) {
      throw new AppError("User not found", 404);
    }

    const realEstate = await realEstateRepository.findOneBy({id: scheduleData.realEstateId});
    if (!realEstate) {
      throw new AppError("Real estate not found", 404);
    }

    const visitDate = new Date(`${date} ${hour}`);
    
    if (visitDate.getHours() < 8 || visitDate.getHours() > 18) {
      throw new AppError("Visits can only be scheduled between 08:00 and 18:00", 400);
    }

    if (visitDate.getDay() === 0 || visitDate.getDay() === 6) {
      throw new AppError("Visits can only be scheduled on weekdays", 400);
    }

   
    const existingSchedule = await scheduleRepository.findOne({
        where:{
            date: scheduleData.date,
            hour: scheduleData.hour
        }
    })

    if (existingSchedule) {
      throw new AppError("Schedule already exists for this real estate and time", 400);
    }


    const schedule = new Schedule();
    schedule.date = date;
    schedule.hour = hour;
    schedule.realEstate = realEstate;
    schedule.user = user;
  
    return scheduleRepository.save(schedule);
}

