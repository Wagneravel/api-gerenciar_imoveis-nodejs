import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";

export async function getScheduleByRealEstateIdService(
  realEstateId: string
): Promise<RealEstate> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const realEstates = await realEstateRepository.findOne({
    where: {
      id: Number(realEstateId)
    },
    relations: {
      schedules: {
        user: true
      },
      address: true,
      category: true
    }
  });

  if (!realEstates) {
    throw new AppError("RealEstate not found", 404);
  }

  return realEstates;
}
