import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iGetRealEstateReturn } from "../../interfaces/realEstate.interface";

export async function listAllRealEstates(): Promise<iGetRealEstateReturn> {

  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)  

  const realEstates = await realEstateRepository.find({
    relations:{
      address:true,
      category:true
    }
  });
  return realEstates;
}