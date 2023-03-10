// import { Between, Repository } from "typeorm";
// import { Request, Response } from "express";
// import { AppDataSource } from "../../data-source";
// import { Schedule } from "../../entities";
// import { AppError } from "../../errors";
// import jwt from "jsonwebtoken";

// require('dotenv').config();

// interface ScheduleRequest {
//   date: string;
//   hour: string;
//   realEstateId: number;
// }

// export async function scheduleVisitService(userId: number, scheduleRequest: ScheduleRequest): Promise<Schedule> {
//   const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

//   const existingSchedule = await scheduleRepository.findOne({
//     where: {
//       date: scheduleRequest.date,
//       hour: scheduleRequest.hour,
//     },
//   });

//   if (existingSchedule) {
//     throw new AppError("A schedule already exists for the given date and time", 400);
//   }

//   const existingUserSchedule = await scheduleRepository.findOne({
//     where: {
//       date: scheduleRequest.date,
//       hour: scheduleRequest.hour,
//       userId: userId,
//     },
//   });

//   if (existingUserSchedule) {
//     throw new AppError("You already have a schedule for the given date and time", 400);
//   }

//   const today = new Date();
//   const scheduleDate = new Date(scheduleRequest.date + " " + scheduleRequest.hour);
//   if (
//     scheduleDate.getDay() == 0 || // Sunday
//     scheduleDate.getDay() == 6 || // Saturday
//     scheduleDate.getHours() < 8 ||
//     scheduleDate.getHours() >= 18 ||
//     scheduleDate < today
//   ) {
//     throw new AppError("The selected date and time are not available for scheduling", 400);
//   }

//   const schedule = new Schedule();
//   schedule.date = scheduleRequest.date;
//   schedule.hour = scheduleRequest.hour;
//   schedule.realEstateId = scheduleRequest.realEstateId;
//   schedule.userId = userId;

//   await scheduleRepository.save(schedule);

//   return schedule;
// }
