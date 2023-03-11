import { Request, Response } from "express";
import { ConnectionNotFoundError } from "typeorm";
import { AppError } from "../errors";
import { createCategoryService } from "../services/category/createCategory.service";
import { getAllCategoriesService } from "../services/category/listAllCategory.service";
import { getRealEstatesByCategoryIdService } from "../services/category/listEstateCategory.service";


export async function createCategoryController(req: Request, res: Response) {

  const  name = req.body.name;

  const category = await createCategoryService(name);

  res.status(201).json(category);
}




export async function getAllCategoriesController(req: Request, res: Response) {

  const categories = await getAllCategoriesService();

  res.status(200).json(categories);
}


export async function getRealEstatesByCategoryIdController(req: Request, res: Response): Promise<void> {
  const { categoryId } = req.params;
  const realEstates = await getRealEstatesByCategoryIdService(categoryId);

  res.status(200).json(realEstates);
}



