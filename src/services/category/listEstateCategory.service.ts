import { EntityManager } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";

export async function getRealEstatesByCategoryIdService(categoryId: string): Promise<RealEstate[]> {
    const entityManager: EntityManager = AppDataSource.createEntityManager();
  
    const realEstateRepository = entityManager.getRepository(RealEstate);
  
    const realEstates = await realEstateRepository.find({ 
        where: { category: categoryId } 
    });
  
    return realEstates;
  }