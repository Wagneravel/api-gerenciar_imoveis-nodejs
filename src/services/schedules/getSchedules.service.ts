import { Repository } from "typeorm";
import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";
import { AppError } from "../../errors";
import { iListAllSchedules } from "../../interfaces/schedule.interface"

import { createScheduleSchema, scheduleReturnSchema } from "../../schemas/schedules.schema";

export async function getScheduleByRealEstateIdService(realEstateId: string): Promise<iListAllSchedules> {
  
  
  const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
  const schedules = await scheduleRepository.find({
    where: {
      realEstate: {
        id: Number(realEstateId)
      }
    },
    relations: {
      realEstate: true,
      user:true
     },
  });

  if (schedules.length === 0) {
    throw new AppError("No schedules found for the given real estate", 404);
  }

  return schedules;
}
























// export async function getScheduleByRealEstateIdService(realEstateId: number): Promise<iListAllSchedules> {
  
//     const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
    
  
//     const schedules = await scheduleRepository.findOne({
//     where: {
//       realEstateId: realEstateId
//     },
//     order: {
//       date: "ASC",
//       hour: "ASC",
//     },
//     relations: ["user"],
//   });

//   if (!schedules) {
//     throw new AppError("No schedules found for the given real estate", 404);
//   }

//   return schedules;
// }
