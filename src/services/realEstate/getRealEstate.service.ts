import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

export async function listAllRealEstates(): Promise<RealEstate[]> {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)  

  const realEstates = await realEstateRepository.find();
  return realEstates;
}