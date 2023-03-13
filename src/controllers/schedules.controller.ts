import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import { AppError } from "../errors";
import { scheduleVisitService } from "../services/schedules/createSchedules.service";
import { getScheduleByRealEstateIdService } from "../services/schedules/getSchedules.service";
import jwt from "jsonwebtoken";
import { iScheduleRequest } from "../interfaces/schedule.interface";


export async function scheduleVisitController(req: Request, res: Response): Promise<Response> {
    
    const scheduleData: iScheduleRequest = req.body;

    const userId = req.user.id

    const schedule = await scheduleVisitService(userId, scheduleData );
  
    return res.status(201).json(schedule);
}


export async function getScheduleByRealEstateIdController(req: Request, res: Response){
    
  const  realEstateId  =  req.params.id;

  const schedule = await getScheduleByRealEstateIdService(realEstateId);
  
  res.status(200).json(schedule);

}

