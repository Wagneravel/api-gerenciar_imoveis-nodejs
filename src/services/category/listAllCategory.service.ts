import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategoriesReturn } from "../../interfaces/category.interface";

export async function getAllCategoriesService(): Promise<iCategoriesReturn> {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)  
  const categories: iCategoriesReturn = await categoryRepository.find();
  return categories;
}