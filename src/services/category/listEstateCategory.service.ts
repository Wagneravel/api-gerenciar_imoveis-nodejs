// import { EntityManager } from "typeorm";
// import { AppDataSource } from "../../data-source";
// import { Category, RealEstate } from "../../entities";
// import { AppError } from "../../errors";


// export async function getRealEstatesByCategoryIdService(categoryId: string): Promise<RealEstate[]> {
//     const entityManager: EntityManager = AppDataSource.createEntityManager();
  
//     const categoryRepository = entityManager.getRepository(Category);
//     const category = await categoryRepository.findOne();

//     if (!category) {
//         throw new AppError('Category not found', 404);
//     }

//     const realEstateRepository = entityManager.getRepository(RealEstate);
  
//     const realEstates = await realEstateRepository.find({ 
//         where: { category } 
//     });
  
//     return realEstates;
// }
