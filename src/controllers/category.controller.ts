import { Request, Response } from "express";
import { ConnectionNotFoundError } from "typeorm";
import { AppError } from "../errors";
import { createCategoryService } from "../services/category/createCategory.service";
import { getAllCategoriesService } from "../services/category/listAllCategory.service";
import { getRealEstatesByCategoryIdService } from "../services/category/listEstateCategory.service";

export async function createCategoryController(request: Request, response: Response) {
    const { name } = request.body;
  
    try {
      const newCategory = await createCategoryService(name);
  
      response.status(201).json(newCategory);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }
  
      console.error(error);
  
      return response.status(500).json({ error: "Internal server error" });
    }
}

export async function getAllCategoriesController(request: Request, response: Response) {
    try {
      const categories = await getAllCategoriesService();
  
      response.status(200).json(categories);
    } catch (error) {
      if (error instanceof ConnectionNotFoundError) {
        console.error(error);
  
        return response.status(500).json({ error: "Database connection error" });
      }
  
      console.error(error);
  
      return response.status(500).json({ error: "Internal server error" });
    }
}


export async function getRealEstatesByCategoryIdController(request: Request, response: Response) {
    const { id } = request.params;
  
    try {
      const realEstates = await getRealEstatesByCategoryIdService(id);
  
      response.status(200).json(realEstates);
    } catch (error) {
      if (error instanceof AppError) {
        response.status(error.statusCode).json({ error: error.message });
      } else {
        console.error(error);
        response.status(500).json({ error: "Internal server error" });
      }
    }
  }