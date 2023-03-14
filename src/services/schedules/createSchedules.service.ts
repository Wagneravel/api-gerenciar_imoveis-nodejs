import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iScheduleRequest } from "../../interfaces/schedule.interface";

require("dotenv").config();

export async function scheduleVisitService(
  userId: number,
  scheduleData: iScheduleRequest
): Promise<Object> {
  const { date, hour } = scheduleData;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const realEstate = await realEstateRepository.findOneBy({
    id: scheduleData.realEstateId
  });
  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const visitDate = new Date(`${date} ${hour}`);

  if (visitDate.getHours() < 8 || visitDate.getHours() > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM");
  }

  if (visitDate.getDay() === 0 || visitDate.getDay() === 6) {
    throw new AppError("Invalid date, work days are monday to friday");
  }

  const existingRealEstateSchedule = await scheduleRepository.findOne({
    where: {
      realEstate: { id: realEstate.id },
      date: scheduleData.date,
      hour: scheduleData.hour
    },
    relations: {
      realEstate: true
    }
  });

  if (existingRealEstateSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const existingUserSchedule = await scheduleRepository.findOne({
    where: {
      user: { id: user.id },
      date: scheduleData.date,
      hour: scheduleData.hour
    },
    relations: {
      user: true
    }
  });

  if (existingUserSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const schedule = new Schedule();
  schedule.date = date;
  schedule.hour = hour;
  schedule.realEstate = realEstate;
  schedule.user = user;

  scheduleRepository.save(schedule);
  return { message: "Schedule created" };
}


