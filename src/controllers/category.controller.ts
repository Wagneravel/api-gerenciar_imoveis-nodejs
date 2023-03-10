import { Request, Response } from "express";
import { ConnectionNotFoundError } from "typeorm";
import { AppError } from "../errors";
import { createCategoryService } from "../services/category/createCategory.service";
import { getAllCategoriesService } from "../services/category/listAllCategory.service";
// import { getRealEstatesByCategoryIdService } from "../services/category/listEstateCategory.service";


export async function createCategoryController(req: Request, res: Response) {
  const  {name} = req.body.name;

  const category = await createCategoryService(name);

  res.status(201).json(category);
}



export async function getAllCategoriesController(request: Request, response: Response): Promise<Response> {
  const categories = await getAllCategoriesService();
  
  if (!categories) {
    throw new AppError("Não foi possível encontrar categorias.", 404);
  }

  return response.json(categories);
}




// export async function getRealEstatesByCategoryIdController(request: Request, response: Response) {
//     const { id } = request.params;
  
//     try {
//       const realEstates = await getRealEstatesByCategoryIdService(id);
  
//       response.status(200).json(realEstates);
//     } catch (error) {
//       if (error instanceof AppError) {
//         response.status(error.statusCode).json({ error: error.message });
//       } else {
//         console.error(error);
//         response.status(500).json({ error: "Internal server error" });
//       }
//     }
//   }