import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iRealEstateByCategoryReturn } from "../../interfaces/category.interface";
import { iGetRealEstateReturn, iRealEstateReturn } from "../../interfaces/realEstate.interface";


export async function getRealEstatesByCategoryIdService(categoryId: string): Promise<iRealEstateByCategoryReturn> {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const foundRealEstate = await categoryRepository.findOne({
        where:{
            id:Number(categoryId)
        },
        relations: {
            realEstate:true
        }
    });

  if (!foundRealEstate) {
    throw new AppError('Category not found', 404);
  }

  return foundRealEstate;
 }
