import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { iCategoryResponse } from "../../interfaces/category.interface";

export async function createCategoryService(name: string): Promise<iCategoryResponse> {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)  

  // Verifica se já existe uma categoria com o mesmo nome
  const existingCategory = await categoryRepository.findOne({ where: { name } });

  if (existingCategory?.name === name) {
    throw new AppError("Category already exists", 409);
  }

  // Cria uma nova categoria
  const newCategory = new Category();
  newCategory.name = name;

  // Salva a nova categoria no banco de dados
  const savedCategory = await categoryRepository.save(newCategory);

  return savedCategory;
}