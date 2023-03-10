// import { Repository } from "typeorm";
// import { Request, Response } from "express";
// import { AppDataSource } from "../../data-source";
// import { Schedule } from "../../entities";
// import { AppError } from "../../errors";

// async function getScheduleByRealEstateIdService(realEstateId: number): Promise<Schedule[]> {
//   const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
//   const schedules = await scheduleRepository.find({
//     where: {
//       realEstateId,
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
