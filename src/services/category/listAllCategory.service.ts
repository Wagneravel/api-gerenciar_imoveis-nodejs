import { EntityManager } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

export async function getAllCategoriesService(): Promise<Category[]> {
  const entityManager: EntityManager = AppDataSource.createEntityManager();

  const categoryRepository = entityManager.getRepository(Category);

  const categories = await categoryRepository.find();

  return categories;
}