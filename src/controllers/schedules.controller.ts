// import { Request, Response } from "express";
// import { Repository } from "typeorm";
// import { AppDataSource } from "../data-source";
// import { Schedule } from "../entities";
// import { AppError } from "../errors";
// import { scheduleVisitService } from "../services/schedules/createSchedules.service";


// export async function scheduleVisitController(req: Request, res: Response): Promise<void> {
//     const { date, hour, realEstateId } = req.body;
  
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       throw new AppError("Authorization token not found", 401);
//     }
//     const decodedToken: any = jwt.verify(token, String(process.env.JWT_SECRET_KEY));
//     const userId = decodedToken.sub;
  
//     const schedule = await scheduleVisitService(userId, { date, hour, realEstateId });
  
//     res.status(201).json(schedule);
// }


// export async function getScheduleByRealEstateIdController(req: Request, res: Response): Promise<void> {
//   const { id } = req.params;
//   const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)  

//   const schedules = await scheduleRepository.find({ where: { realEstate: id } });

//   res.status(200).json(schedules);
// }