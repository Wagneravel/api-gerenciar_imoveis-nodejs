import { EntityManager } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

export async function createCategoryService(name: string): Promise<Category> {
  const entityManager: EntityManager = AppDataSource.createEntityManager();

  const categoryRepository = entityManager.getRepository(Category);

  // Verifica se já existe uma categoria com o mesmo nome
  const existingCategory = await categoryRepository.findOne({ where: { name } });

  if (existingCategory) {
    throw new Error("Já existe uma categoria com este nome.");
  }

  // Cria uma nova categoria
  const newCategory = new Category();
  newCategory.name = name;

  // Salva a nova categoria no banco de dados
  const savedCategory = await categoryRepository.save(newCategory);

  return savedCategory;
}