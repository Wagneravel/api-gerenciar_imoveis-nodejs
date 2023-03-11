import { Router } from "express";
import { createCategoryController, getAllCategoriesController, getRealEstatesByCategoryIdController } from "../controllers/category.controller";
import verifyIsAdminUserMiddleware from "../middlewares/verifyIsAdminUser.middleware";
import verifyIsAdminOrSameUserMiddleware from "../middlewares/verifyIsAdminUser.middleware";
import verifyTokenIsValidMiddleware from "../middlewares/verifyTokenIsValid.middleware";


const categoriesRoutes:Router = Router() 

categoriesRoutes.post('', verifyTokenIsValidMiddleware, verifyIsAdminUserMiddleware, createCategoryController) //categories	Criação de categorias
categoriesRoutes.get('', getAllCategoriesController ) //categories Deve listar todas as categorias 
categoriesRoutes.get('/:categoryId/realEstate', getRealEstatesByCategoryIdController ) //categories	Lista todos imóveis que pertencem a uma categoria


export default categoriesRoutes


